import { client } from '@/utils/api/client'
import { Schedule, ScheduleResponse } from '../types'
// import instance from '@/utils/api/axiosInstance'

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

// >> 요렇게 사용하시면 됩니다~
// export const postSchedule = async (scheduleDetail: Schedule): Promise<ScheduleResponse> => {
//   return instance.post('/schedule', scheduleDetail)
// }

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
