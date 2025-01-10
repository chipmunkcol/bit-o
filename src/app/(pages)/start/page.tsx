'use client'

import BaseButton from '@/widgets/button/BaseButton'

export default function StartPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen start">
      <img className="w-[192px] h-[192px]" src="/images/logo/icon_192.png" alt="logo" />
      <p className="mt-16 text-lg">BitO 시작하기</p>
      <div className="mt-8 px-12 w-full">
        <BaseButton title="커플 생성하기" className="bg-brown text-white" />
      </div>
      <div className="mt-2 px-12 w-full">
        <BaseButton title="코드 입력하기" className="border border-brown" />
      </div>
    </div>
  )
}
