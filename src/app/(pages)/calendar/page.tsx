'use client'

import { useEffect } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
import { useQuery } from '@tanstack/react-query'
import { ScheduleResponse } from '@/entities/calendar/api/types'
import { getCalendarList } from '@/entities/calendar/api'
import useScheduleStore from '@/store/scheduleStore'
import CalendarPlans from './CalendarPlans'
import { LoadingSpinner } from '@/shared/ui'

export default function CalendarPage() {
  const { setSelectedDate, setSchedules, setCurrentDate, currentDate } = useScheduleStore()

  const {
    isLoading,
    isError,
    data: plandata,
    error,
  } = useQuery<ScheduleResponse[]>({
    queryKey: ['calendarlist'],
    queryFn: () => getCalendarList(),
  })

  useEffect(() => {
    if (plandata && Array.isArray(plandata)) {
      setSchedules(plandata)
    }
  }, [plandata, setSchedules, setSelectedDate])

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
        <CalendarPlans />
      </div>
    )
  )
}
