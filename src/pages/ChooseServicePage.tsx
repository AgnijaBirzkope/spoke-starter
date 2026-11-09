import { ActionBar, ServiceCard, TopBar } from '../components'
import { services, type ServiceId } from './bookingData'
import './ChooseServicePage.css'

type ChooseServicePageProps = {
  selectedService: ServiceId
  onSelectService: (service: ServiceId) => void
  onBack?: () => void
  onContinue: () => void
}

export function ChooseServicePage({ selectedService, onSelectService, onBack, onContinue }: ChooseServicePageProps) {

  return (
    <div className="choose-service-page">
      <TopBar onBack={onBack} />

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
              onClick={() => onSelectService(service.id)}
            />
          ))}
        </div>
      </main>

      <ActionBar label="Continue" onAction={onContinue} />
    </div>
  )
}
