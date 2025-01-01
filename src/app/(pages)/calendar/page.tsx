'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState<Date>()
  const [today, setToday] = useState<Date>()

  useEffect(() => {
    setCurrentDate(new Date())
    setToday(new Date())
  }, [])

  return (
    currentDate &&
    today && (
      <div className="px-[1.5rem] py-[2.1rem] flex flex-col gap-[1.5rem]">
        <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <CalendarBody currentDate={currentDate} />
        <div className="text-[1.13rem] font-semibold">{format(today, 'yyyy년 MM년 dd일')}</div>
        <div className="flex flex-col">
          <div className="h-[2.7rem] bg-gray-50 rounded-[8px] flex items-center py-[6px] px-[12px] gap-[8px]">
            <Image
              alt="couble_left"
              src="/images/icon/plus.png"
              width={24}
              height={24}
              className="rotate-180"
            />
            <span>New Event</span>
          </div>
        </div>
      </div>
    )
  )
}
