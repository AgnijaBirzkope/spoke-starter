import { useState } from 'react'
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
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  function handleConfirm() {
    const nextErrors: { name?: string; phone?: string } = {}
    const phoneDigits = phone.replace(/\D/g, '')

    if (!name.trim()) nextErrors.name = 'Enter your name.'
    if (!phone.trim()) nextErrors.phone = 'Enter your phone number.'
    else if (phoneDigits.length < 8) nextErrors.phone = 'Enter a valid phone number.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) onConfirm?.()
  }

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

        <Input
          label="Your name"
          name="name"
          autoComplete="name"
          placeholder="First and last name"
          value={name}
          error={errors.name}
          onChange={(event) => {
            setName(event.target.value)
            if (errors.name) setErrors((current) => ({ ...current, name: undefined }))
          }}
        />
        <Input
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+32 470 12 34 56"
          value={phone}
          error={errors.phone}
          onChange={(event) => {
            setPhone(event.target.value)
            if (errors.phone) setErrors((current) => ({ ...current, phone: undefined }))
          }}
        />

        <p className="confirm-booking-page__note">We text you when your bike is ready. You pay when you pick it up.</p>
      </main>

      <ActionBar label="Confirm booking" onAction={handleConfirm} />
    </div>
  )
}
