import { useEffect } from 'react'
import UseLoginOauth from './lib/use-login-oauth'
import LoginKakaoBtn from './ui/login-kakao-btn'

const Oauth = () => {
  const { redirectToKakaoAuth, isLogin, routeOnboarding } = UseLoginOauth()

  useEffect(() => {
    if (isLogin) {
      routeOnboarding()
    }
  }, [isLogin])

  return (
    <>
      <LoginKakaoBtn handler={redirectToKakaoAuth} />
      <div>
        <div className="underline text-sm text-gray-300">다른 이메일로 시작하기</div>
      </div>
    </>
  )
}

export default Oauth
