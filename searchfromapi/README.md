<<<<<<< HEAD
# Search From API

A small React + Vite project that implements a debounced search UI with live suggestions using the DummyJSON products search API.

## Features

- Search products by name using `https://dummyjson.com/products/search?q=`
- Debounced API requests while typing
- Loading state display
- Live search suggestions dropdown
- No results message when nothing matches
- Product listing display for search results

## Project Structure

- `src/App.jsx` - root app wrapper
- `src/Pages/Dashboard.jsx` - search page, API fetch logic, debouncing, loading & no-results handling
- `src/Components/Search.jsx` - search input and suggestion dropdown
- `src/Components/Display.jsx` - product preview card
- `src/App.css` / `src/index.css` - project styling

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm installed

### Install dependencies

```bash
cd searchfromapi
npm install
```

### Run locally

```bash
npm run dev
```

Open the local Vite URL shown in the terminal (usually `http://localhost:5173`).

## Notes

- The search is debounced to avoid too many API calls.
- Queries with an empty input clear the results list.
- Suggestions appear while typing and can be clicked to fill the search box.

## Available scripts

- `npm run dev` - start development server
- `npm run build` - build production assets
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## API

This project uses the DummyJSON search endpoint:

```
https://dummyjson.com/products/search?q={query}
```

Replace `{query}` with the search text.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> be3b245218aff0bb399577d1ce6a9373fa5cf049
