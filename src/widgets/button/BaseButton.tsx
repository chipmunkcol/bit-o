import { forwardRef, memo } from 'react'

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset'
  title: string
  disabled?: boolean
  className?: string
}

const BaseButton = memo(
  forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ type = 'button', disabled, title, className, ...props }, ref) => {
      return (
        <button
          ref={ref}
          type={type}
          disabled={disabled}
          {...props}
          className={`hover:scale-[1.01] duration-200 hover:shadow-md py-[0.85rem] rounded-full w-full ${className}`}
        >
          {title}
        </button>
      )
    },
  ),
)

export default BaseButton
