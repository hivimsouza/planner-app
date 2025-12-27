import React from 'react'

const tips = [
  'Adote uma alimentação variada e balanceada',
  'Inclua legumes e verduras nas principais refeições',
  'Evite distrações (celular/TV) ao comer para melhorar a saciedade',
  'Hidrate-se ao longo do dia',
  'Planeje compras com antecedência para seguir o plano'
]

const Tips: React.FC = () => (
  <div>
    <h1 className='title'>DICAS & ESTRATÉGIAS</h1>
    {tips.map((t, i) => (
      <div key={i} className='row' aria-label={`Dica ${i+1}`}> 
        <span style={{ color: '#0b74ea', marginRight: 8 }}>✓</span>
        <span>{t}</span>
      </div>
    ))}
  </div>
)

export default Tips
