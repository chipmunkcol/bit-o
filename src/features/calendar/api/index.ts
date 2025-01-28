import { client } from '@/utils/api/client'
import { Schedule, ScheduleResponse } from '../types'

export const getCalendarList = async (userId: number): Promise<ScheduleResponse[]> => {
  return client(`/schedule/user/${userId}`)
}

export const getScheduleDetail = async (scheduleId: number): Promise<ScheduleResponse> => {
  return client(`/schedule/${scheduleId}`)
}

export const postSchedule = async (scheduleDetail: Schedule): Promise<ScheduleResponse> => {
  return client(`/schedule`, {
    method: 'POST',
    body: JSON.stringify(scheduleDetail),
  })
}

export const putSchedule = async ({
  scheduleId,
  scheduleDetail,
}: {
  scheduleId: number
  scheduleDetail: Schedule
}): Promise<ScheduleResponse> => {
  return client(`/schedule/${scheduleId}`, {
    method: 'PUT',
    body: JSON.stringify(scheduleDetail),
  })
}

export const deleteSchedule = async ({ scheduleId }: { scheduleId: number }) => {
  return client(`/schedule/${scheduleId}`, {
    method: 'DELETE',
  })
}
