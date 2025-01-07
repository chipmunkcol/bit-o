import { client } from '@/utils/api/client'
import { CalendarListReponse } from '../types'

export const getCalendarList = async (userId: number): Promise<CalendarListReponse> => {
  return client(`/schedule/user/${userId}`)
}
