import Image from 'next/image'
import { memo } from 'react'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const ProgressBar = memo(({ currentStep, totalSteps }: ProgressBarProps) => {
  if (totalSteps === 1) return null
  return (
    <div className="relative mx-3 h-10" style={{ width: 'calc(100% - 24px)' }}>
      <div className="top-1/2 left-1/2 absolute w-full transform -translate-x-1/2 -translate-y-1/2">
        <div className="z-0 absolute bg-slate-200 w-full h-1"></div>
        <div
          className="z-10 absolute bg-pink h-1"
          style={{
            width: `${(currentStep / (totalSteps - 1)) * 100}%`,
          }}
        ></div>
        {Array.from({ length: totalSteps }).map((_, index) => {
          return (
            <Image
              alt="heart"
              key={index}
              src={
                index <= currentStep
                  ? '/images/icon/heart_active.png'
                  : '/images/icon/heart_inactive.png'
              }
              width={40}
              height={40}
              className="z-20 absolute text-pink"
              style={{
                top: '50%',
                left: `${(index / (totalSteps - 1)) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          )
        })}
      </div>
    </div>
  )
})

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
