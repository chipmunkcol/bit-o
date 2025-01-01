import { dayOfTheWeek, generateDate } from '@/utils/calendar'

interface CalendarBodyProps {
  currentDate: Date
}

const CalendarBody = ({ currentDate }: CalendarBodyProps) => {
  return (
    <div className="flex flex-col h-[54vh] w-full text-[0.75rem]">
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
      <div className="grid grid-cols-7">
        {generateDate({
          month: currentDate.getMonth(),
          year: currentDate.getFullYear(),
        }).map(({ date, currentMonth, today }, index) => {
          return (
            <div key={date.getDate() + '_' + index} className="h-[10vh] flex justify-center">
              <div
                className={`${currentMonth ? (today ? 'text-white bg-black rounded-full ' : 'text-black') : 'text-gray-100'} 
                text-center w-[24px] h-[24px] flex items-center justify-center`}
              >
                <span>{date.getDate()}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CalendarBody
