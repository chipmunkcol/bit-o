interface HeaderProps {
  title: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClickleftIcon?: () => void
}

/**
 * 기본 헤더 컴포넌트
 * 가운데 텍스트와 좌우에 아이콘을 넣을 수 있습니다.
 */
const BaseHeader = ({ title, leftIcon }: HeaderProps) => {
  return (
    <div className="py-[1rem] sticky top-0 left-0 right-0 bg-white">
      {leftIcon && leftIcon}
      <p className="text-center text-[1rem] font-semibold">{title}</p>
    </div>
  )
}
export default BaseHeader
