import React, { useState } from 'react'

type PlanOption = 1|2|3
const MEALS: Record<PlanOption, string[]> = {
  1: ['Arroz + frango grelhado', 'Ovos mexidos + salada', 'Iogurte + frutas', 'Peixe assado + legumes', 'Wrap integral + peito de peru'],
  2: ['Arroz integral + tofu', 'Omelete de claras', 'Smoothie proteico', 'Carne magra + batata-doce', 'Quinoa + vegetais'],
  3: ['Feijão + arroz + bife', 'Macarrão integral + frango', 'Panqueca de aveia', 'Sopa de legumes + frango', 'Sanduíche integral + queijo branco'],
}
const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

export default function Planner(){
  const [opt, setOpt] = useState<PlanOption>(1)
  const [last, setLast] = useState<string>('')
  const [weekly, setWeekly] = useState<{day:string, meal:string}[]>([])

  const gerarRefeicao = () => {
    const list = MEALS[opt]
    const idx = Math.floor(Math.random()*list.length)
    setLast(list[idx])
  }
  const gerarSemanal = () => {
    const list = MEALS[opt]
    setWeekly(days.map((d,i)=>({ day: d, meal: list[i%list.length] })))
  }

  return (
    <div>
      <h1>GERAR REFEIÇÃO</h1>
      <button onClick={gerarRefeicao}>Opção {opt}</button>

      <h2 style={{ marginTop: 16 }}>GERAR SEMANAL</h2>
      <div style={{ display:'flex', gap:8 }}>
        {[1,2,3].map(o=> (
          <button key={o} onClick={()=>setOpt(o as PlanOption)} style={{ background:o===opt?'#0b74ea':'#eee', color:o===opt?'#fff':'#000', borderRadius:8, padding:'8px 12px' }}>Opção {o}</button>
        ))}
      </div>
      <button style={{ marginTop: 12 }} onClick={gerarSemanal}>Gerar com Opção {opt}</button>

      {last && (
        <div style={{ marginTop: 16 }}>
          <strong>Última refeição (Opção {opt})</strong>
          <p>{last}</p>
        </div>
      )}

      {weekly.length>0 && (
        <div style={{ marginTop: 16 }}>
          <strong>Plano semanal (Opção {opt})</strong>
          <ul>
            {weekly.map(d=> <li key={d.day} style={{ display:'flex', justifyContent:'space-between', maxWidth:480 }}><span style={{ fontWeight:700 }}>{d.day}</span><span>{d.meal}</span></li>)}
          </ul>
        </div>
      )}
    </div>
  )
}
