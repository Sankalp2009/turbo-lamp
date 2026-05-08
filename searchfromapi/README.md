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
