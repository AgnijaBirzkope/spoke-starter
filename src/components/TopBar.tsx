import type { ButtonHTMLAttributes } from 'react'
import chevronLeft from '../assets/chevron-left.svg'
import './TopBar.css'

export type TopBarProps = {
  title?: string
  step?: string
  onBack?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  className?: string
}

export function TopBar({ title = 'Book a repair', step = 'Step 1 of 3', onBack, className = '' }: TopBarProps) {
  return (
    <header className={`top-bar ${className}`.trim()}>
      <button className="top-bar__back" type="button" aria-label="Go back" onClick={onBack}>
        <img src={chevronLeft} width="24" height="24" alt="" />
      </button>
      <h1 className="top-bar__title">{title}</h1>
      <span className="top-bar__step">{step}</span>
    </header>
  )
}
