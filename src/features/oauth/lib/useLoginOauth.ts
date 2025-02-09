'use client'

import { useNavigater } from '@/shared/lib'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const UseLoginOauth = () => {
  const searchParams = useSearchParams()
  const { navigateOnboarding, navigateToKakaoAuth } = useNavigater()

  const loginController = () => {
    const cookies = document.cookie
    const refreshToken = cookies.split('refresh_token=')[1]
    if (refreshToken) {
      navigateOnboarding()
    } else {
      navigateToKakaoAuth()
    }
  }

  useEffect(() => {
    const accessToken = searchParams.get('token')
    if (accessToken) {
      localStorage.setItem('access_token', accessToken)
      navigateOnboarding()
    }
  }, [])

  return { loginController }
}

export default UseLoginOauth
