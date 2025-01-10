'use client'

import BaseButton from '@/widgets/button/BaseButton'
import BaseHeader from '@/widgets/layout/BaseHeader'
import AddEventLocation from './AddEventLocation'
import AddEventNote from './AddEventNote'
import AddEventTime from './AddEventTime'
import AddEventTitle from './AddEventTitle'

export default function AddEventPage() {
  return (
    <>
      <BaseHeader title={'이벤트 추가'} backIcon />
      <div className="flex flex-col px-[1.5rem] py-[1.5rem] h-[100vh] overflow-hidden">
        <div className="flex flex-col flex-grow gap-[3rem] overflow-y-auto">
          <AddEventTitle placeholder={'Title'} />
          <AddEventTime />
          <AddEventLocation />
          <AddEventNote />
        </div>
      </div>
      <div className="right-0 bottom-0 left-0 sticky px-[1.5rem] pt-[1.5rem] pb-[3rem]">
        <BaseButton title="저장하기" className="bg-pink text-white" />
      </div>
    </>
  )
}
