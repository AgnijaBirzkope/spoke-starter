import { ActionBar, Input, SummaryRow, TopBar } from '../components'
import './ConfirmBookingPage.css'

type ConfirmBookingPageProps = {
  serviceTitle: string
  price: string
  selectedDay: string
  selectedTime: string
  onBack: () => void
  onConfirm?: () => void
}

export function ConfirmBookingPage({ serviceTitle, price, selectedDay, selectedTime, onBack, onConfirm }: ConfirmBookingPageProps) {
  return (
    <div className="confirm-booking-page">
      <TopBar step="Step 3 of 3" onBack={onBack} />

      <main className="confirm-booking-page__content">
        <header className="confirm-booking-page__header">
          <h2>Check and confirm</h2>
        </header>

        <section className="confirm-booking-page__summary" aria-label="Booking summary">
          <SummaryRow label="Service" value={serviceTitle} />
          <SummaryRow label="Drop-off" value={`${selectedDay} at ${selectedTime}`} />
          <SummaryRow label="Price" value={`${price}, pay at pick-up`} />
        </section>

        <Input label="Your name" name="name" autoComplete="name" placeholder="First and last name" />
        <Input
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+32 470 12 34 56"
          state="focus"
        />

        <p className="confirm-booking-page__note">We text you when your bike is ready. You pay when you pick it up.</p>
      </main>

      <ActionBar label="Confirm booking" onAction={onConfirm} />
    </div>
  )
}
