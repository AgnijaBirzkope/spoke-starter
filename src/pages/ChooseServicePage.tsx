import { useState } from 'react'
import { ActionBar, ServiceCard, TopBar } from '../components'
import './ChooseServicePage.css'

const services = [
  {
    id: 'flat-tyre',
    title: 'Flat tyre repair',
    description: 'Tube or tyre swap, any wheel size.',
    duration: '30 min',
    price: '€15',
  },
  {
    id: 'brake-check',
    title: 'Brake check and adjust',
    description: 'Pads, cables and alignment.',
    duration: '45 min',
    price: '€25',
  },
  {
    id: 'gear-tune-up',
    title: 'Gear tune-up',
    description: 'Smooth shifting on every gear.',
    duration: '45 min',
    price: '€30',
  },
  {
    id: 'full-service',
    title: 'Full service',
    description: 'Everything checked, cleaned and adjusted.',
    duration: '2 hours',
    price: '€89',
  },
] as const

export function ChooseServicePage() {
  const [selectedService, setSelectedService] = useState<string>('flat-tyre')

  return (
    <div className="choose-service-page">
      <TopBar />

      <main className="choose-service-page__content">
        <header className="choose-service-page__header">
          <h2>Choose a service</h2>
          <p>What does your bike need?</p>
        </header>

        <div className="choose-service-page__list" aria-label="Available services">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              duration={service.duration}
              price={service.price}
              state={selectedService === service.id ? 'selected' : 'default'}
              onClick={() => setSelectedService(service.id)}
            />
          ))}
        </div>
      </main>

      <ActionBar label="Continue" />
    </div>
  )
}
