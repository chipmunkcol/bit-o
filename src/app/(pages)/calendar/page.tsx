'use client'

import { useEffect } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
import { useQuery } from '@tanstack/react-query'
import { CalendarListReponse } from '@/features/calendar/types'
import { getCalendarList } from '@/features/calendar/api'
import useAddEventStore from '@/store/addEventStore'
import LoadingSpinner from '@/shared/ui/LoadingSpinner'
import CalendarPalns from './CalendarPlans'

export default function CalendarPage() {
  const { setPlans, setCurrentDate, currentDate } = useAddEventStore()

  /*** 로그인 만들어지면 고치기 */
  const userId = 1
  const {
    isLoading,
    isError,
    data: plandata,
    error,
  } = useQuery<CalendarListReponse>({
    queryKey: ['calendarlist', userId],
    queryFn: () => getCalendarList(userId),
  })

  useEffect(() => {
    if (plandata && Array.isArray(plandata)) {
      setPlans(plandata)
    }
  }, [plandata, setPlans])

  useEffect(() => {
    //달&월을 위한 일자 - 오늘 날짜
    setCurrentDate(new Date())
  }, [setCurrentDate])

  if (isLoading) return <LoadingSpinner />
  if (isError) alert(error)

  return (
    currentDate && (
      <div className="cursor-pointer px-[1.5rem] py-[2.1rem] flex flex-col gap-[1.5rem]">
        <CalendarHeader />
        <CalendarBody />
        <CalendarPalns />
      </div>
    )
  )
}
