import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  title: string
  backIcon?: boolean
}

/**
 * 기본 헤더 컴포넌트
 * 옵션 : 뒤로가기 버튼
 */
const BaseHeader = ({ title, backIcon }: HeaderProps) => {
  const router = useRouter()

  const handleBackIcon = () => {
    router.back()
  }
  return (
    <div className="flex px-[1.5rem] py-[1rem] sticky top-0 left-0 right-0 bg-white items-center ">
      {/** 뒤로가기  */}
      {backIcon && (
        <Image
          className="rotate-180 absolute left-[1rem] cursor-pointer"
          alt="couble_right"
          src="/images/icon/arrow.png"
          width={30}
          height={30}
          onClick={handleBackIcon}
        />
      )}
      <p className="text-[1rem] font-semibold text-center flex-grow">{title}</p>
    </div>
  )
}
export default BaseHeader
