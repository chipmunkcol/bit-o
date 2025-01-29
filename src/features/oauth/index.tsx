import UseLoginOauth from './lib/useLoginOauth'
import LoginKakaoBtn from './ui/loginKakaoBtn'

const Oauth = () => {
  const { loginController } = UseLoginOauth()

  return (
    <>
      <LoginKakaoBtn handler={loginController} />
      <div>
        <div className="underline text-sm text-gray-300">다른 이메일로 시작하기</div>
      </div>
    </>
  )
}

export default Oauth
