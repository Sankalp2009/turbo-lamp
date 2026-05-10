import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './Context/AppContext.jsx'
import App from './App'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
)