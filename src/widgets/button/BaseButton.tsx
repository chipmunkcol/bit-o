import { forwardRef, memo } from 'react'

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  title: string
  color?: 'bg-pink' | 'bg-brown'
  disabled?: boolean
}

const BaseButton = memo(
  forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ type = 'button', disabled, title, color = 'bg-pink', ...props }, ref) => {
      return (
        <button
          ref={ref}
          type={type}
          disabled={disabled}
          {...props}
          className={`${color} rounded-full py-[0.85rem] text-white w-full shadow-md`}
        >
          {title}
        </button>
      )
    },
  ),
)

export default BaseButton
