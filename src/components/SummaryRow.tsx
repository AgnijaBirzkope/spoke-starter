import './SummaryRow.css'

export type SummaryRowProps = { label: string; value: string; className?: string }

export function SummaryRow({ label, value, className = '' }: SummaryRowProps) {
  return (
    <div className={`summary-row ${className}`.trim()}>
      <span className="summary-row__label">{label}</span>
      <span className="summary-row__value">{value}</span>
    </div>
  )
}
