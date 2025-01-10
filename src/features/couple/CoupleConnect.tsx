'use client'

interface CoupleConnectProps {
  type: 'create' | 'code'
}

export default function CoupleConnect({ type }: CoupleConnectProps) {
  return <div>{type}</div>
}
