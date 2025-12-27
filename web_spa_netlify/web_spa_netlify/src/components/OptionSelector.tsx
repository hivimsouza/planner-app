import React from 'react'
import { PlanOption } from '../services/planGenerator'

interface Props {
  value: PlanOption
  onChange: (opt: PlanOption) => void
}

const OptionSelector: React.FC<Props> = ({ value, onChange }) => (
  <div className='selector' role='radiogroup' aria-label='Selecione a opção do plano'>
    {[1,2,3].map(opt => (
      <button
        key={opt}
        className={`item ${value === opt ? 'active' : ''}`}
        role='radio'
        aria-checked={value === opt}
        onClick={() => onChange(opt as PlanOption)}
      >Opção {opt}</button>
    ))}
  </div>
)

export default OptionSelector
