export const services = [
  { id: 'flat-tyre', title: 'Flat tyre repair', description: 'Tube or tyre swap, any wheel size.', duration: '30 min', price: '€15' },
  { id: 'brake-check', title: 'Brake check and adjust', description: 'Pads, cables and alignment.', duration: '45 min', price: '€25' },
  { id: 'gear-tune-up', title: 'Gear tune-up', description: 'Smooth shifting on every gear.', duration: '45 min', price: '€30' },
  { id: 'full-service', title: 'Full service', description: 'Everything checked, cleaned and adjusted.', duration: '2 hours', price: '€89' },
] as const

export const days = ['Today', 'Tomorrow', 'Mon 16'] as const

export const times = [
  { label: '09:00', disabled: true },
  { label: '10:30', disabled: true },
  { label: '12:00', disabled: false },
  { label: '14:00', disabled: false },
  { label: '16:30', disabled: false },
  { label: '17:30', disabled: false },
] as const

export type ServiceId = (typeof services)[number]['id']
export type Day = (typeof days)[number]
export type DropOffTime = (typeof times)[number]['label']
