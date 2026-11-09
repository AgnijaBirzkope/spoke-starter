import { useState } from 'react'
import { ActionBar, TimeSlot, TopBar } from '../components'
import './PickSlotPage.css'

const days = ['Today', 'Tomorrow', 'Mon 16'] as const
const times = [
  { label: '09:00', disabled: true },
  { label: '10:30', disabled: true },
  { label: '12:00', disabled: false },
  { label: '14:00', disabled: false },
  { label: '16:30', disabled: false },
  { label: '17:30', disabled: false },
] as const

export function PickSlotPage() {
  const [selectedDay, setSelectedDay] = useState<string>('Today')
  const [selectedTime, setSelectedTime] = useState<string>('16:30')

  return (
    <div className="pick-slot-page">
      <TopBar step="Step 2 of 3" />

      <main className="pick-slot-page__content">
        <header className="pick-slot-page__header">
          <h2>Pick a drop-off time</h2>
          <p>Flat tyre repair, about 30 minutes</p>
        </header>

        <section className="pick-slot-page__group" aria-labelledby="day-label">
          <h3 id="day-label">Day</h3>
          <div className="pick-slot-page__options">
            {days.map((day) => (
              <TimeSlot
                key={day}
                label={day}
                state={selectedDay === day ? 'selected' : 'default'}
                onClick={() => setSelectedDay(day)}
              />
            ))}
          </div>
        </section>

        <section className="pick-slot-page__group" aria-labelledby="time-label">
          <h3 id="time-label">Drop-off time</h3>
          <div className="pick-slot-page__options">
            {times.map(({ label, disabled }) => (
              <TimeSlot
                key={label}
                label={label}
                state={disabled ? 'disabled' : selectedTime === label ? 'selected' : 'default'}
                onClick={() => setSelectedTime(label)}
              />
            ))}
          </div>
        </section>

        <p className="pick-slot-page__note">Ready the same day. We text you when your bike is done.</p>
      </main>

      <ActionBar label="Continue" />
    </div>
  )
}
