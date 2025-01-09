'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  console.log('로그인 페이지 렌더링')
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      router.push('/onboarding')
    }
  }, [])

  return (
    <div>
      <div>hello, login!</div>
      <div>
        {/* <button onClick={loginHandler}>카카오 로그인</button> */}
        <button>
          <Link href={'http://localhost:8080/oauth2/authorization/kakao'}>카카오 로그인</Link>
        </button>
      </div>
    </div>
  )
}
