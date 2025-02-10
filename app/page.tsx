import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-center">임시 페이지입니다🙌</h1>
      <div className="flex flex-col gap-5 mt-10 text-center">
        <Link href={'/login'}>
          <div className="hover:text-gray-500">로그인 페이지 바로가기🔗</div>
        </Link>
        <Link href={'/connect'}>
          <div className="hover:text-gray-500">커플 연결 페이지 바로가기🔗</div>
        </Link>
        <Link href={'/calendar'}>
          <div className="hover:text-gray-500">캘린더 페이지 바로가기🔗</div>
        </Link>
      </div>
    </div>
  )
}
