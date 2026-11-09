import { ActionBar, TimeSlot, TopBar } from '../components'
import { days, times, type Day, type DropOffTime } from './bookingData'
import './PickSlotPage.css'

type PickSlotPageProps = {
  serviceTitle: string
  serviceDuration: string
  selectedDay: Day
  selectedTime: DropOffTime
  onSelectDay: (day: Day) => void
  onSelectTime: (time: DropOffTime) => void
  onBack: () => void
  onContinue: () => void
}

export function PickSlotPage({ serviceTitle, serviceDuration, selectedDay, selectedTime, onSelectDay, onSelectTime, onBack, onContinue }: PickSlotPageProps) {

  return (
    <div className="pick-slot-page">
      <TopBar step="Step 2 of 3" onBack={onBack} />

      <main className="pick-slot-page__content">
        <header className="pick-slot-page__header">
          <h2>Pick a drop-off time</h2>
          <p>{serviceTitle}, about {serviceDuration}</p>
        </header>

        <section className="pick-slot-page__group" aria-labelledby="day-label">
          <h3 id="day-label">Day</h3>
          <div className="pick-slot-page__options">
            {days.map((day) => (
              <TimeSlot
                key={day}
                label={day}
                state={selectedDay === day ? 'selected' : 'default'}
                onClick={() => onSelectDay(day)}
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
                onClick={() => onSelectTime(label)}
              />
            ))}
          </div>
        </section>

        <p className="pick-slot-page__note">Ready the same day. We text you when your bike is done.</p>
      </main>

      <ActionBar label="Continue" onAction={onContinue} />
    </div>
  )
}
