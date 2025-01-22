import NavigationBar from '@/shared/ui/NavigationBar'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full h-full bg-gray-100 flex-col">
      <div className="mx-auto h-auto w-full min-w-[280px] max-w-[33.75rem]">
        <div className="flex min-h-[100vh] flex-col bg-white">{children}</div>
        <NavigationBar />
      </div>
    </div>
  )
}

export default Layout
