import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Planner from './pages/Planner'
import Tips from './pages/Tips'

const App: React.FC = () => {
  return (
    <div className='container'>
      <header className='header' aria-label='Cabeçalho'>
        <div className='brand'>Planner Semanal</div>
        <nav className='nav' aria-label='Navegação principal'>
          <NavLink to='/' end>Planejador</NavLink>
          <NavLink to='/dicas'>Dicas</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Planner />} />
        <Route path='/dicas' element={<Tips />} />
      </Routes>
      <footer className='footer'>© {new Date().getFullYear()} — Feito com foco em simplicidade, didática e performance.</footer>
    </div>
  )
}

export default App
