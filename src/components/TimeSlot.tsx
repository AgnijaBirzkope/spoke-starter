import type { ButtonHTMLAttributes } from 'react'
import './TimeSlot.css'

export type TimeSlotProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  label: string
  state?: 'default' | 'selected' | 'disabled'
}

export function TimeSlot({ label, state = 'default', className = '', ...props }: TimeSlotProps) {
  const isSelected = state === 'selected'
  const isDisabled = state === 'disabled'

  return (
    <button
      className={`time-slot time-slot--${state} ${className}`.trim()}
      type="button"
      aria-pressed={isSelected}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>
  )
}
