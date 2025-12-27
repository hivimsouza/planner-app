import { describe, expect, it } from 'vitest'
import { generateWeekly } from '../services/planGenerator'

describe('Plano semanal consistente por opção', () => {
  it('não mistura opções', () => {
    const p1 = generateWeekly(1)
    const p2 = generateWeekly(2)
    const p3 = generateWeekly(3)
    expect(p1.option).toBe(1)
    expect(p2.option).toBe(2)
    expect(p3.option).toBe(3)
    expect(p1.days).toHaveLength(7)
    expect(p2.days).toHaveLength(7)
    expect(p3.days).toHaveLength(7)
  })
})
