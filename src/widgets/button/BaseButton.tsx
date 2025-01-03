import { forwardRef, memo } from 'react'

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset'
  title: string
  disabled?: boolean
}

const BaseButton = memo(
  forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ type = 'button', disabled, title, ...props }, ref) => {
      return (
        <button
          ref={ref}
          type={type}
          disabled={disabled}
          {...props}
          className="bg-pink rounded-full py-[0.85rem] text-white w-full shadow-md"
        >
          {title}
        </button>
      )
    },
  ),
)

export default BaseButton
