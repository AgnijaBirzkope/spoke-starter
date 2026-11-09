import { ActionBar, Input, SummaryRow, TopBar } from '../components'
import './ConfirmBookingPage.css'

export function ConfirmBookingPage() {
  return (
    <div className="confirm-booking-page">
      <TopBar step="Step 3 of 3" />

      <main className="confirm-booking-page__content">
        <header className="confirm-booking-page__header">
          <h2>Check and confirm</h2>
        </header>

        <section className="confirm-booking-page__summary" aria-label="Booking summary">
          <SummaryRow label="Service" value="Flat tyre repair" />
          <SummaryRow label="Drop-off" value="Today at 16:30" />
          <SummaryRow label="Price" value="€15, pay at pick-up" />
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

      <ActionBar label="Confirm booking" />
    </div>
  )
}
