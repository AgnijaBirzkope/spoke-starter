import { useId, type InputHTMLAttributes } from 'react'
import './Input.css'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label: string
  state?: 'default' | 'focus'
  error?: string
}

export function Input({ label, state = 'default', error, className = '', id, ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`

  return (
    <label className={`input-field ${className}`.trim()} htmlFor={inputId}>
      <span className="input-field__label">{label}</span>
      <input
        className={`input-field__control input-field__control--${state}${error ? ' input-field__control--error' : ''}`}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && <span className="input-field__error" id={errorId}>{error}</span>}
    </label>
  )
}
