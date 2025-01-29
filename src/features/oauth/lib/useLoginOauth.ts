import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const UseLoginOauth = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const routeOnboarding = () => {
    router.push('/onboarding')
  }

  const redirectToKakaoAuth = () => {
    router.push('http://localhost:8080/oauth2/authorization/kakao')
  }

  const loginController = () => {
    const cookies = document.cookie
    const refreshToken = cookies.split('refresh_token=')[1]
    if (refreshToken) {
      routeOnboarding()
    } else {
      redirectToKakaoAuth()
    }
  }

  useEffect(() => {
    const accessToken = searchParams.get('token')
    if (accessToken) {
      localStorage.setItem('access_token', accessToken)
      routeOnboarding()
    }
  }, [])

  return { loginController }
}

export default UseLoginOauth
