'use client'

import useScheduleStore from '@/store/scheduleStore'
import DateTimeInput from '@/widgets/input/DateTimeInput'
import { format } from 'date-fns'
import Image from 'next/image'

const AddEventTime = () => {
  const { date, setDate } = useScheduleStore()

  const handleDateInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'start' | 'end',
    mode: 'date' | 'time',
  ) => {
    const value = e.target.value
    const defaultDate = {
      startDateTime: new Date(),
      endDateTime: new Date(),
    }

    const currentDate = date || defaultDate

    const updatedDate = {
      ...currentDate,
      [`${type}DateTime`]:
        mode === 'date'
          ? new Date(
              `${value}T${format(date ? new Date(currentDate[`${type}DateTime`]) : new Date(), 'HH:mm')}`,
            )
          : new Date(
              `${format(date ? new Date(currentDate[`${type}DateTime`]) : new Date(), 'yyyy-MM-dd')}T${value}`,
            ),
    }

    setDate(updatedDate)
  }

  return (
    <div className="flex">
      <div className="flex flex-row gap-[0.8rem] flex-wrap w-full">
        <DateTimeInput
          dateTime={date ? date?.startDateTime : new Date()}
          handleDateChange={(e) => handleDateInput(e, 'start', 'date')}
          handleTimeChange={(e) => handleDateInput(e, 'start', 'time')}
        />
        <div className="flex items-center justify-center">
          <Image alt="left" src="/images/icon/arrow.png" width={24} height={24} />
        </div>
        <DateTimeInput
          dateTime={date ? date?.endDateTime : new Date()}
          handleDateChange={(e) => handleDateInput(e, 'end', 'date')}
          handleTimeChange={(e) => handleDateInput(e, 'end', 'time')}
        />
      </div>
    </div>
  )
}

export default AddEventTime
