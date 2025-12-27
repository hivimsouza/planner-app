import React from 'react'
export default function Tips(){
  const tips = [
    'Adote uma alimentação variada e balanceada',
    'Inclua legumes e verduras nas principais refeições',
    'Evite distrações ao comer para melhorar a saciedade',
    'Hidrate-se ao longo do dia',
    'Planeje compras com antecedência para seguir o plano'
  ]
  return (
    <div>
      <h1>DICAS & ESTRATÉGIAS</h1>
      <ul>
        {tips.map((t,i)=> <li key={i}>✓ {t}</li>)}
      </ul>
    </div>
  )
}
