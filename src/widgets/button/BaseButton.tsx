import React, { forwardRef, memo } from 'react'

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const BaseButton = memo(
  forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ type = 'button', title, className, ...props }, ref) => {
      return (
        <button
          ref={ref}
          type={type}
          className={`hover:scale-[1.01] duration-200 hover:shadow-md py-[0.85rem] rounded-full w-full ${className}`}
          {...props}
        >
          {title}
        </button>
      )
    },
  ),
)

export default BaseButton
