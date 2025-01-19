'use client'

import TextButton from '@/widgets/button/TextButton'
import ProgressBar from '@/widgets/status/ProgressBar'
import Image from 'next/image'
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
  const steps = CONNECT_STEP[type]
  const [currentPage, setCurrentPage] = useState<number>(0)
  const currentStep = steps[currentPage]

  const goToNextStep = () => {
    if (currentPage >= steps.length - 1) return
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col items-center px-16 pt-32 h-full">
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
        <ProgressBar currentStep={currentPage} totalSteps={steps.length} />
      </div>
      <p className="text-center whitespace-pre-wrap">{CONNECT_STEP_INSTRUCTION[currentStep]}</p>
      <div className="mt-12 self-end">
        <TextButton title="다음으로" className="text-brown" onClick={() => goToNextStep()} />
      </div>
    </div>
  )
}
