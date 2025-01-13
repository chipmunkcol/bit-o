'use client'

import BaseButton from '@/widgets/button/BaseButton'
import BaseHeader from '@/widgets/layout/BaseHeader'
import AddEventTitle from './AddScheduleTitle'
import AddEventTime from './AddScheduleTime'
import AddEventNote from './AddScheduleNote'
import AddEventLocation from './AddScheduleLocation'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getScheduleDetail } from '@/features/calendar/api'
import { ScheduleResponse } from '@/features/calendar/types'
import { useEffect } from 'react'
import useScheduleStore from '@/store/scheduleStore'
import LoadingSpinner from '@/shared/ui/LoadingSpinner'

export default function AddEventPage() {
  const { setTitle, setNote, setDate } = useScheduleStore()
  const params = useParams() as { id: string }
  const scheduleId = parseInt(params.id)
  const {
    data: scheduleDetailData,
    isLoading,
    isError,
    error,
  } = useQuery<ScheduleResponse>({
    queryKey: ['scheduleDetail', scheduleId],
    queryFn: () => getScheduleDetail(scheduleId),
    enabled: !!scheduleId,
  })

  useEffect(() => {
    if (scheduleDetailData && scheduleId) {
      setTitle(scheduleDetailData.title)
      setNote(scheduleDetailData.content)
      setDate({
        startDateTime: new Date(scheduleDetailData.startDateTime),
        endDateTime: new Date(scheduleDetailData.endDateTime),
      })
    }
    return () => {
      setTitle(null)
      setNote(null)
    }
  }, [scheduleDetailData, setTitle, setNote, setDate, scheduleId])

  if (isLoading) return <LoadingSpinner />
  if (isError) alert(error)

  return (
    <>
      <BaseHeader title={'이벤트 추가'} backIcon />
      <div className="flex flex-col px-[1.5rem] h-[100vh] overflow-hidden py-[1.5rem]">
        <div className="flex flex-col flex-grow overflow-y-auto gap-[3rem] ">
          <AddEventTitle placeholder={'Title'} />
          <AddEventTime />
          <AddEventLocation />
          <AddEventNote />
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 pb-[3rem] pt-[1.5rem] px-[1.5rem]">
        <BaseButton title="저장하기" />
      </div>
    </>
  )
}
