import { useState } from 'react'
import { ChooseServicePage } from './pages/ChooseServicePage'
import { ConfirmBookingPage } from './pages/ConfirmBookingPage'
import { PickSlotPage } from './pages/PickSlotPage'
import { services, type Day, type DropOffTime, type ServiceId } from './pages/bookingData'
import './App.css'

type BookingStep = 1 | 2 | 3

function App() {
  const [step, setStep] = useState<BookingStep>(1)
  const [selectedService, setSelectedService] = useState<ServiceId>('flat-tyre')
  const [selectedDay, setSelectedDay] = useState<Day>('Today')
  const [selectedTime, setSelectedTime] = useState<DropOffTime>('16:30')

  const service = services.find(({ id }) => id === selectedService) ?? services[0]

  return (
    <div className="app">
      {step === 1 && (
        <ChooseServicePage
          selectedService={selectedService}
          onSelectService={setSelectedService}
          onBack={() => setStep(1)}
          onContinue={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <PickSlotPage
          serviceTitle={service.title}
          serviceDuration={service.duration}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          onSelectDay={setSelectedDay}
          onSelectTime={setSelectedTime}
          onBack={() => setStep(1)}
          onContinue={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <ConfirmBookingPage
          serviceTitle={service.title}
          price={service.price}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          onBack={() => setStep(2)}
        />
      )}
    </div>
  )
}

export default App
