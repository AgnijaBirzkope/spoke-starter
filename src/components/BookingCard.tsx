import { Button } from './Button'
import { Tag } from './Tag'
import './BookingCard.css'

export type BookingCardProps = {
  title: string
  description: string
  duration: string
  bikeType: string
  price: string
  nextSlot: string
  actionLabel?: string
  onBook?: () => void
}

export function BookingCard({ title, description, duration, bikeType, price, nextSlot, actionLabel = 'Book this repair', onBook }: BookingCardProps) {
  return (
    <article className="booking-card">
      <header className="booking-card__header">
        <h2 className="booking-card__title">{title}</h2>
        <p className="booking-card__description">{description}</p>
      </header>
      <div className="booking-card__meta">
        <div className="booking-card__tags" aria-label="Service details">
          <Tag label={duration} />
          <Tag label={bikeType} />
        </div>
        <strong className="booking-card__price">{price}</strong>
      </div>
      <p className="booking-card__slot">Next free slot: {nextSlot}</p>
      <Button className="booking-card__action" onClick={onBook}>{actionLabel}</Button>
    </article>
  )
}
