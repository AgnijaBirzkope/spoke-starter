import type { ButtonHTMLAttributes } from 'react'
import { Tag } from './Tag'
import './ServiceCard.css'

export type ServiceCardProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  title?: string
  description?: string
  price?: string
  duration?: string
  state?: 'default' | 'selected'
}

export function ServiceCard({ title = 'Flat tyre repair', description = 'Tube or tyre swap, any wheel size.', price = '€15', duration = '30 min', state = 'default', className = '', ...props }: ServiceCardProps) {
  return (
    <button className={`service-card service-card--${state} ${className}`.trim()} type="button" aria-pressed={state === 'selected'} {...props}>
      <span className="service-card__header">
        <strong>{title}</strong>
        <strong>{price}</strong>
      </span>
      <span className="service-card__description">{description}</span>
      <span className="service-card__tags"><Tag label={duration} /></span>
    </button>
  )
}
