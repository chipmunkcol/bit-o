'use client'

import Oauth from '@/features/oauth'
import Image from 'next/image'

export default function Page() {
  // console.log('로그인 페이지 렌더링')

  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-center items-center gap-10 ">
        <div>
          <Image width={126} height={44} src={'/images/logo/BitO.svg'} alt="logo" />
        </div>
        <div className="text-center text-[21px]">
          <div>간편하게 로그인하고</div>
          <div>다양한 서비스를 이용해보세요.</div>
        </div>
        {/* 카카오 로그인 컴포넌트 */}
        {/* 카카오 로그인 컴포넌트 */}
        <Oauth />
      </div>
    </div>
  )
}
