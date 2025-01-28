import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const UseLoginOauth = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  const routeOnboarding = () => {
    router.push('/onboarding')
  }

  const redirectToKakaoAuth = () => {
    router.push('http://localhost:8080/oauth2/authorization/kakao')
  }

  useEffect(() => {
    const accessToken = searchParams.get('token')
    if (accessToken) {
      localStorage.setItem('access_token', accessToken)
      setIsLogin(true)
    }
  }, [])

  return { redirectToKakaoAuth, isLogin, routeOnboarding }
}

export default UseLoginOauth
