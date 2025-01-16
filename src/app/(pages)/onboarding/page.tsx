import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-24 text-center"
        style={{ height: ' 100vh' }}
      >
        <div className="flex flex-col gap-5">
          <div>
            <Image width={126} height={44} src={'/images/logo/BitO.svg'} alt="logo" />
          </div>
          <div className="flex justify-center">
            <Image width={50} height={50} src={'/images/logo/icon-50.svg'} alt="logo-icon" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
            <Image width={50} height={50} src={'/images/icon/check_br.png'} alt="chcek-icon" />
          </div>
          <div style={{ fontSize: '21px' }}>회원가입 완료</div>
          <div>
            <div>이**님 반갑습니다!</div>
            <div>회원이 되신것을 환영합니다.</div>
          </div>
        </div>
        <div className="border-r">
          <button
            style={{
              width: '345px',
              height: '52px',
              borderRadius: '40px',
              backgroundColor: '#C5B697',
              color: '#fff',
              fontSize: '16px',
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  )
}
