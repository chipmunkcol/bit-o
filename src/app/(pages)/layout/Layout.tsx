import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full h-full bg-gray-100">
      {/* <div className="mx-auto h-auto w-full min-w-[280px] max-w-[33.75rem]">
        <div className="flex min-h-[100vh] w-full flex-col items-stretch justify-start bg-white"> */}
      <div className="mx-auto h-full w-full min-w-[280px] max-w-[33.75rem]">
        <div className="flex h-full w-full flex-col items-stretch justify-start bg-white">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
