import { dayOfTheWeek, generateDate } from '@/utils/calendar'
import { isEqual } from 'date-fns'

interface CalendarBodyProps {
  currentDate: Date
  selectedDate: Date | null
  setSelectedDate: (date: Date) => void
}

const CalendarBody = ({ currentDate, selectedDate, setSelectedDate }: CalendarBodyProps) => {
  const getDateStyle = ({ date, today }: { date: Date | null; today: boolean | undefined }) => {
    if (!date) return

    /** 오늘날짜 일때 */
    if (today) {
      if (selectedDate && isEqual(date, selectedDate)) {
        return 'text-white bg-black rounded-full' // 오늘날짜 == 클릭된 날짜
      }
      return 'text-white bg-gray-100 rounded-full' //오늘날짜 !== 클릭된 날짜

      /** 오늘날짜가 아닐때*/
    } else if (selectedDate && isEqual(date, selectedDate)) {
      return 'text-white bg-black rounded-full' // 클릭된 날짜
    }

    return 'text-black' // 기본 상태
  }

  return (
    <div className="flex flex-col  w-full text-[0.75rem]">
      <div className="flex w-full h-[4vh] items-center">
        {dayOfTheWeek.map((item, index) => {
          return (
            <div key={index} className="flex-1 text-center text-gray-400">
              <span>{item}</span>
            </div>
          )
        })}
      </div>
      {/** 일자 */}
      <div className="grid grid-cols-7 ">
        {generateDate({
          month: currentDate.getMonth(),
          year: currentDate.getFullYear(),
        }).map(({ date, currentMonth, today }, index) => {
          return (
            <div key={date.getDate() + '_' + index} className=" h-[10vh] flex justify-center ">
              <div
                className={`${currentMonth ? getDateStyle({ date, today }) : 'text-gray-100'} 
                text-center w-[24px] h-[24px] flex items-center justify-center`}
                onClick={() => setSelectedDate(date)}
              >
                <span className="cursor-pointer">{date.getDate()}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CalendarBody
