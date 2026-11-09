import type { ButtonHTMLAttributes } from 'react'
import { Button } from './Button'
import './ActionBar.css'

export type ActionBarProps = {
  label?: string
  className?: string
  onAction?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

export function ActionBar({ label = 'Book this repair', className = '', onAction }: ActionBarProps) {
  return (
    <footer className={`action-bar ${className}`.trim()}>
      <Button className="action-bar__button" onClick={onAction}>{label}</Button>
    </footer>
  )
}
