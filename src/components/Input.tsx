import { useId, type InputHTMLAttributes } from 'react'
import './Input.css'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label: string
  state?: 'default' | 'focus'
}

export function Input({ label, state = 'default', className = '', id, ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <label className={`input-field ${className}`.trim()} htmlFor={inputId}>
      <span className="input-field__label">{label}</span>
      <input className={`input-field__control input-field__control--${state}`} id={inputId} {...props} />
    </label>
  )
}
