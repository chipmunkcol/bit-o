'use client'

import BaseButton from '@/widgets/button/BaseButton'
import BaseHeader from '@/widgets/layout/BaseHeader'
import AddEventTitle from './AddEventTitle'
import AddEventTime from './AddEventTime'
import AddEventNote from './AddEventNote'
import AddEventLocation from './AddEventLocation'
import { useParams } from 'next/navigation'

export default function AddEventPage() {
  const params = useParams()
  const id = params.id
  console.log(id)

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
