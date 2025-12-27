import React from 'react'
import OptionSelector from '../components/OptionSelector'
import { PlanProvider, usePlan } from '../state/PlanContext'

const PlannerInner: React.FC = () => {
  const { selectedOption, setSelectedOption, gerarRefeicao, gerarSemanal, lastMeal, weekly } = usePlan()

  return (
    <div>
      <h1 className='title'>GERAR REFEIÇÃO</h1>
      <button className='btn' onClick={gerarRefeicao} aria-label={`Gerar refeição da Opção ${selectedOption}`}>
        Opção {selectedOption}
      </button>

      <div className='card'>
        <h2 className='title'>GERAR SEMANAL</h2>
        <OptionSelector value={selectedOption} onChange={setSelectedOption} />
        <button className='btn' style={{ marginTop: 12 }} onClick={gerarSemanal} aria-label={`Gerar semanal com Opção ${selectedOption}`}>
          Gerar com Opção {selectedOption}
        </button>
      </div>

      {lastMeal && (
        <div className='card' aria-live='polite'>
          <strong>Última refeição (Opção {selectedOption})</strong>
          <p style={{ margin: 0 }}>{lastMeal}</p>
        </div>
      )}

      {weekly && (
        <div className='card'>
          <strong>Plano semanal (Opção {weekly.option})</strong>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {weekly.days.map((d) => (
              <li key={d.day} className='row'>
                <span style={{ fontWeight: 700 }}>{d.day}</span>
                <span>{d.meal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const Planner: React.FC = () => (
  <PlanProvider>
    <PlannerInner />
  </PlanProvider>
)

export default Planner
