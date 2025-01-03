'use client'

import BaseButton from '@/widgets/button/BaseButton'
import BaseHeader from '@/widgets/layout/BaseHeader'
import AddEventTitle from './AddEventTitle'
import AddEventTime from './AddEventTime'
import AddEventNote from './AddEventNote'
import AddEventLocation from './AddEventLocation'

export default function AddEventPage() {
  return (
    <>
      <BaseHeader title={'이벤트 추가'} />
      <div className="flex flex-col px-[1.5rem] h-[100vh] overflow-hidden">
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
