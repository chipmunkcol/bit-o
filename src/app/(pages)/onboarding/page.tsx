import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div>BitO </div>
      <div>Icon</div>
      <div>Icon</div>
      <div>회원가입 완료</div>
      <div>***님 반갑습니다!</div>
      <div>회원이 되신것을 환영합니다.</div>
      <div>
        <button>
          <Link href={''}>시작하기</Link>
        </button>
      </div>
    </div>
  )
}
