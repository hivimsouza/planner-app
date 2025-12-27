import React, { createContext, useContext, useMemo, useState } from 'react'
import { generateMeal, generateWeekly, PlanOption, WeeklyPlan } from '../services/planGenerator'

interface PlanState {
  selectedOption: PlanOption
  setSelectedOption: (opt: PlanOption) => void
  lastMeal?: string
  weekly?: WeeklyPlan
  gerarRefeicao: () => void
  gerarSemanal: () => void
}

const PlanContext = createContext<PlanState | undefined>(undefined)

export const PlanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState<PlanOption>(1)
  const [lastMeal, setLastMeal] = useState<string | undefined>(undefined)
  const [weekly, setWeekly] = useState<WeeklyPlan | undefined>(undefined)

  const gerarRefeicao = () => {
    const meal = generateMeal(selectedOption)
    setLastMeal(meal)
  }

  const gerarSemanal = () => {
    const plan = generateWeekly(selectedOption)
    setWeekly(plan)
  }

  const value = useMemo(() => ({
    selectedOption,
    setSelectedOption,
    lastMeal,
    weekly,
    gerarRefeicao,
    gerarSemanal,
  }), [selectedOption, lastMeal, weekly])

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
}

export const usePlan = () => {
  const ctx = useContext(PlanContext)
  if (!ctx) throw new Error('usePlan deve ser usado dentro de PlanProvider')
  return ctx
}
