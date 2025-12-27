export type PlanOption = 1 | 2 | 3

export type WeeklyPlan = {
  option: PlanOption
  days: { day: string; meal: string }[]
}

// Dados de exemplo — substitua pelo seu backend ou arquivo de receitas
const MEALS: Record<PlanOption, string[]> = {
  1: ['Arroz + frango grelhado', 'Ovos mexidos + salada', 'Iogurte + frutas', 'Peixe assado + legumes', 'Wrap integral + peito de peru'],
  2: ['Arroz integral + tofu', 'Omelete de claras', 'Smoothie proteico', 'Carne magra + batata-doce', 'Quinoa + vegetais'],
  3: ['Feijão + arroz + bife', 'Macarrão integral + frango', 'Panqueca de aveia', 'Sopa de legumes + frango', 'Sanduíche integral + queijo branco'],
}

export function generateMeal(option: PlanOption): string {
  const choices = MEALS[option]
  const idx = Math.floor(Math.random() * choices.length)
  return choices[idx]
}

export function generateWeekly(option: PlanOption): WeeklyPlan {
  const choices = MEALS[option]
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
  const plan = days.map((d, i) => ({ day: d, meal: choices[i % choices.length] }))
  return { option, days: plan }
}
