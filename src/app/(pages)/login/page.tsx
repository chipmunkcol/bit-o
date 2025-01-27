'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  console.log('로그인 페이지 렌더링')
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      // 파라미터로 넘어오는 access_token 저장
      localStorage.setItem('access_token', token)
      router.push('/onboarding')
    }
  }, [])

  const onClickLogin = () => {
    router.push('http://localhost:8080/oauth2/authorization/kakao')
  }

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
        <div
          className="mt-4 mb-10 cursor-pointer"
          onClick={() => {
            onClickLogin()
          }}
        >
          <Image
            width={340}
            height={52}
            src={'/images/icon/kakaoBtn.svg'}
            alt="카카오톡-로그인-버튼"
          />
        </div>
        <div>
          <div className="underline text-sm text-gray-300">다른 이메일로 시작하기</div>
        </div>
      </div>
    </div>
  )
}
