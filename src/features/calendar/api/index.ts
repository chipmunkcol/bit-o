import { client } from '@/utils/api/client'
import { ScheduleResponse } from '../types'

export const getCalendarList = async (userId: number): Promise<ScheduleResponse[]> => {
  return client(`/schedule/user/${userId}`)
}

export const getScheduleDetail = async (scheduleId: number): Promise<ScheduleResponse> => {
  return client(`/schedule/${scheduleId}`)
}
