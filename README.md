# XOX — Tic-Tac-Toe

A modern, responsive Tic-Tac-Toe game built with React and Vite.

[![CI](https://github.com/Gamze-Mise/Xox/actions/workflows/ci.yml/badge.svg)](https://github.com/Gamze-Mise/Xox/actions/workflows/ci.yml)

## Features

- Classic 3×3 Tic-Tac-Toe gameplay
- Score tracking (X, O, Draw)
- Winning line highlight and animations
- Mobile-friendly, viewport-fit layout
- Accessibility (ARIA labels, keyboard support)
- Dark indigo theme

## Setup

```bash
yarn install
yarn dev
```

Or with npm:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Commands

| Command | Description |
|---------|-------------|
| `yarn dev` | Start the development server |
| `yarn build` | Create a production build |
| `yarn preview` | Preview the production build |
| `yarn test` | Run tests |
| `yarn test:watch` | Run tests in watch mode |
| `yarn lint` | Run ESLint |

## Project Structure

```
├── src/
│   ├── components/     # Board, Cell, ScoreBoard
│   ├── utils/          # Game logic (checkWinner)
│   ├── test/           # Vitest setup
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .github/workflows/  # CI pipeline
└── index.html
```

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 4](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

## License

MIT
