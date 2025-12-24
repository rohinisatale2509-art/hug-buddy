import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95',
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
          'btn-hero-primary bg-white text-gray-900 hover:bg-gray-100 shadow-lg': variant === 'primary',
          'btn-hero-secondary bg-transparent text-white border-2 border-white hover:bg-white/10 backdrop-blur-sm': variant === 'secondary',
          'bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900': variant === 'outline',
          'opacity-50 cursor-not-allowed': props.disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}