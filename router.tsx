import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Planner from './pages/Planner'
import Tips from './pages/Tips'

const App: React.FC = () => (
  <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <strong>Planner Semanal</strong>
      <nav style={{ display: 'flex', gap: 16 }}>
        <NavLink to="/" end>Planejador</NavLink>
        <NavLink to="/dicas">Dicas</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Planner />} />
      <Route path="/dicas" element={<Tips />} />
    </Routes>
  </div>
)
export default App
