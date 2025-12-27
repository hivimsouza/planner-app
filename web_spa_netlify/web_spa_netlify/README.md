# Planner Semanal Profissional (React + Vite + Netlify)

Site SPA com interface didática e profissional, pronto para deploy no Netlify.

## Recursos
- Seleção de **Opção 1/2/3** antes de gerar o **semanal** (sem mistura).
- Botão **Gerar Refeição** que respeita a opção selecionada.
- Aba **Dicas & Estratégias**.
- Acessibilidade básica (roles ARIA, foco em semântica).
- Performance com cache estático e SPA redirects no `netlify.toml`.

## Instalação
```bash
npm install
npm run dev
```
Acesse http://localhost:5173

## Build e Deploy (Netlify)
1. `npm run build` → gera `dist/`.
2. **Netlify**: site novo → configure *Build command* `npm run build` e *Publish directory* `dist`.
3. Ou use **Drag & Drop** de `dist/` no painel do Netlify.

## Estrutura
```
src/
  components/OptionSelector.tsx
  pages/Planner.tsx
  pages/Tips.tsx
  services/planGenerator.ts
  state/PlanContext.tsx
  router.tsx
  styles.css
```

## Personalização
- Edite receitas em `src/services/planGenerator.ts`.
- Ajuste identidade visual em `src/styles.css`.

## Testes
```bash
npm run test
```
Usa **Vitest** para validar que o semanal não mistura opções.
