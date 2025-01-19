'use client'

import TextButton from '@/widgets/button/TextButton'
import ProgressBar from '@/widgets/status/ProgressBar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type CoupleConnectType = 'create' | 'code'
type CoupleConnectStep = 'date' | 'nickname' | 'create-code' | 'insert-code' | 'complete'

interface CoupleConnectProps {
  type: CoupleConnectType
}

const CONNECT_STEP: Record<CoupleConnectType, CoupleConnectStep[]> = {
  create: ['date', 'nickname', 'create-code'],
  code: ['insert-code', 'nickname', 'complete'],
}

const CONNECT_STEP_IMAGE: Record<CoupleConnectStep, string> = {
  date: '/images/illustration/love1.png',
  nickname: '/images/illustration/love2.png',
  'create-code': '/images/illustration/love3.png',
  'insert-code': '/images/illustration/love4.png',
  complete: '/images/illustration/love5.png',
}

const CONNECT_STEP_INSTRUCTION: Record<CoupleConnectStep, string> = {
  date: '처음 사귀기 시작한 날짜를 \n선택해주세요.',
  nickname: '우리 둘 사이에서\n나의 애칭은 무엇인가요?',
  'create-code': '커플 코드가 생성되었어요.\n상대방에게 공유해볼까요?',
  'insert-code': '커플 코드를 입력해주세요.',
  complete: '커플 연결이 완료되었어요.\n이제 bitO를 사용해보세요.',
}

export default function CoupleConnect({ type }: CoupleConnectProps) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isForward, setIsForward] = useState<boolean>(true)

  const steps = CONNECT_STEP[type]
  const currentStep = steps[currentPage]

  const goToNextStep = () => {
    if (currentPage >= steps.length - 1) return
    setIsForward(true)
    setCurrentPage((prev) => prev + 1)
  }
  const goToPrevStep = () => {
    if (currentPage === 0) {
      router.back()
      return
    }
    setIsForward(false)
    setCurrentPage((prev) => prev - 1)
  }

  return (
    <div className="flex flex-col p-8 h-full">
      <Image
        title="이전으로"
        alt="left"
        src="/images/icon/arrow.png"
        width={36}
        height={36}
        className="hover:bg-gray-50 rounded-md cursor-pointer rotate-180 self-start"
        onClick={() => goToPrevStep()}
      />
      <div className="flex flex-col flex-1 items-center pt-32">
        <div className="h-16">
          <Image
            src={CONNECT_STEP_IMAGE[currentStep]}
            alt={`step-${currentStep}`}
            width={0}
            height={0}
            style={{ width: 'auto', height: '100%' }}
          />
        </div>
        <div className="my-10 w-40">
          <ProgressBar currentStep={currentPage} totalSteps={steps.length} isForward={isForward} />
        </div>
        <p className="h-16 text-center whitespace-pre-wrap">
          {CONNECT_STEP_INSTRUCTION[currentStep]}
        </p>
        <div className="h-40"></div>
        <div className="mt-12 self-end">
          <TextButton title="다음으로" className="text-brown" onClick={() => goToNextStep()} />
        </div>
      </div>
    </div>
  )
}
