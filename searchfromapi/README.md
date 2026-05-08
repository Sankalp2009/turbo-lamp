# Debounced API Search

A small React project that implements a Debounced API Search with live suggestions using the DummyJSON products search API.

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

## Notes

- The search is debounced to avoid too many API calls.
- Queries with an empty input clear the results list.
- Suggestions appear while typing and can be clicked to fill the search box.

## API

This project uses the DummyJSON search endpoint:

```
https://dummyjson.com/products/search?q={query}
```

Replace `{query}` with the search text.

## React Patterns Learned

This project demonstrates several important React patterns commonly used in production applications:

### 1. Controlled Component Pattern
```jsx
<input value={text} onChange={handleChange} />
```
React controls the input state through `value` and `setText`.

### 2. Lifting State Up
State lives in the parent component and is passed down to children:
```jsx
const [text, setText] = useState("");
<Search text={text} setText={setText} />
```

### 3. Debouncing Pattern
Prevents excessive API calls with timeout management:
```jsx
const timerID = setTimeout(() => {
  FetchQuery(text);
}, 300);

return () => clearTimeout(timerID);
```

### 4. Side Effect Pattern (useEffect)
```jsx
useEffect(() => {
  // API calls and side effects
}, [text]);
```

### 5. Cleanup Pattern
Prevents memory leaks and stale timers:
```jsx
return () => clearTimeout(timerID);
```

### 6. Conditional Rendering Pattern
```jsx
{isLoading && <h3>Loading...</h3>}
{!isLoading && data.length === 0 && <h3>No Results Found</h3>}
```

### 7. Smart API Fetching Pattern
Guard clauses to avoid unnecessary requests:
```jsx
if (text.trim()) {
  FetchQuery(text);
}
```

### 8. Search Suggestion Dropdown Pattern
Autocomplete with visibility management, click selection, and focus/blur handling.

### 9. Parent-Child Communication Pattern
Props callback pattern for child-to-parent communication:
```jsx
<Search setText={setText} />
```

### 10. Async Data Handling Pattern
Managing loading states and API responses:
```jsx
setIsLoading(true);
// fetch data
setIsLoading(false);
```

### 11. Derived UI State Pattern
UI state derived from component state (e.g., dropdown visibility based on data length).

### 12. Reusable Component Pattern
Separated concerns into `Search`, `Display`, and `Dashboard` components.