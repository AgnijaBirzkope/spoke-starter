import { useState, type ReactNode } from 'react'
import {
  ActionBar,
  BookingCard,
  Button,
  Frame47,
  Input,
  ServiceCard,
  SummaryRow,
  Tag,
  TimeSlot,
  TopBar,
} from '../components'
import './ComponentLibraryPage.css'

function Preview({ children }: { children: ReactNode }) {
  return <div className="component-library__preview">{children}</div>
}

function ComponentSection({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="component-library__section">
      <header className="component-library__section-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      <Preview>{children}</Preview>
    </section>
  )
}

export function ComponentLibraryPage() {
  const [selectedTime, setSelectedTime] = useState('16:30')
  const [selectedService, setSelectedService] = useState('flat-tyre')

  return (
    <main className="component-library">
      <header className="component-library__hero">
        <span className="component-library__eyebrow">Spoke design system</span>
        <h1>Component library</h1>
        <p>Reusable components and their available states.</p>
      </header>

      <div className="component-library__grid">
        <ComponentSection title="Button" description="Primary for the main action; secondary for supporting actions.">
          <div className="component-library__row">
            <Button>Book this repair</Button>
            <Button variant="secondary">Book this repair</Button>
          </div>
        </ComponentSection>

        <ComponentSection title="Tag" description="Small labels for service facts such as duration and bike type.">
          <div className="component-library__row">
            <Tag label="30 min" />
            <Tag label="All bikes" />
          </div>
        </ComponentSection>

        <ComponentSection title="Time slot" description="Pickable times with default, selected and disabled states.">
          <div className="component-library__row">
            {['16:30', '17:00'].map((time) => (
              <TimeSlot key={time} label={time} state={selectedTime === time ? 'selected' : 'default'} onClick={() => setSelectedTime(time)} />
            ))}
            <TimeSlot label="17:30" state="disabled" />
          </div>
        </ComponentSection>

        <ComponentSection title="Input" description="Text fields in their resting and focus appearances.">
          <div className="component-library__stack">
            <Input label="Your name" placeholder="First and last name" />
            <Input label="Your name" placeholder="First and last name" state="focus" />
          </div>
        </ComponentSection>

        <ComponentSection title="Top bar" description="Booking-flow header with back action and step counter.">
          <TopBar />
        </ComponentSection>

        <ComponentSection title="Service card" description="Selectable service cards with default and selected states.">
          <div className="component-library__stack">
            <ServiceCard
              title="Flat tyre repair"
              description="Tube or tyre swap, any wheel size."
              duration="30 min"
              price="€15"
              state={selectedService === 'flat-tyre' ? 'selected' : 'default'}
              onClick={() => setSelectedService('flat-tyre')}
            />
            <ServiceCard
              title="Brake check and adjust"
              description="Pads, cables and alignment."
              duration="45 min"
              price="€25"
              state={selectedService === 'brake-check' ? 'selected' : 'default'}
              onClick={() => setSelectedService('brake-check')}
            />
          </div>
        </ComponentSection>

        <ComponentSection title="Summary row" description="A label and value pair for the booking summary.">
          <SummaryRow label="Service" value="Flat tyre repair" />
        </ComponentSection>

        <ComponentSection title="Action bar" description="Bottom screen area containing the primary action.">
          <ActionBar />
        </ComponentSection>

        <ComponentSection title="Booking card" description="Complete service overview and booking action.">
          <BookingCard
            title="Flat tyre repair"
            description="Tube or tyre swap, any wheel size."
            duration="30 min"
            bikeType="All bikes"
            price="€15"
            nextSlot="today at 16:30"
          />
        </ComponentSection>

        <ComponentSection title="Frame 47" description="Figma frame adapter backed by the Booking card component.">
          <Frame47
            title="Flat tyre repair"
            description="Tube or tyre swap, any wheel size."
            duration="30 min"
            bikeType="All bikes"
            price="€15"
            nextSlot="today at 16:30"
          />
        </ComponentSection>
      </div>
    </main>
  )
}
