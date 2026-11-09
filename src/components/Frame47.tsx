import { BookingCard, type BookingCardProps } from './BookingCard'

export type Frame47Props = BookingCardProps

/**
 * Code counterpart for Figma node 4:6 ("Frame 47").
 *
 * The source frame is made from loose, absolutely positioned layers. Its
 * visual design is equivalent to the reusable BookingCard component, so this
 * adapter preserves the Figma name while keeping the implementation on the
 * shared design-system primitive.
 */
export function Frame47(props: Frame47Props) {
  return <BookingCard {...props} />
}
