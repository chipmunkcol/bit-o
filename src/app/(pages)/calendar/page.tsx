'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { CalendarListReponse } from '@/features/calendar/types'
import { getCalendarList } from '@/features/calendar/api'
import useAddEventStore from '@/store/addEventStore'
import LoadingSpinner from '@/shared/ui/LoadingSpinner'

export default function CalendarPage() {
  const router = useRouter()
  const [currentDate, setCurrentDate] = useState<Date>()
  const [today, setToday] = useState<Date>()
  const { setPlans, selectedDatePlans } = useAddEventStore()

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
    //달&월을 위한 일자
    setCurrentDate(new Date())
    //오늘
    setToday(new Date())
    //클릭 일자
  }, [])

  const handleEventClick = () => {
    router.push('/calendar/add')
  }

  if (isLoading) return <LoadingSpinner />
  if (isError) alert(error)

  return (
    currentDate &&
    today && (
      <div className="cursor-pointer px-[1.5rem] py-[2.1rem] flex flex-col gap-[1.5rem]">
        <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <CalendarBody currentDate={currentDate} />
        <div className="text-[1.13rem] font-semibold">{format(today, 'yyyy년 MM년 dd일')}</div>
        <div className="flex flex-col">
          <div
            className="h-[2.7rem] bg-gray-50 rounded-[8px] flex items-center py-[6px] px-[12px] gap-[8px]"
            onClick={handleEventClick}
          >
            <Image
              alt="couble_left"
              src="/images/icon/plus.png"
              width={24}
              height={24}
              className="rotate-180"
            />
            <span>New Event</span>
          </div>
          {selectedDatePlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className="mt-2 h-[2.7rem] bg-gray-50 rounded-[8px] flex items-center py-[6px] px-[12px] gap-[8px]"
                onClick={handleEventClick}
              >
                <div>{plan.title}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  )
}
