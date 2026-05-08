import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ListContextProvider from './Components/context'
createRoot(document.getElementById('root')).render(
  <ListContextProvider>
    <App />
  </ListContextProvider>,
)
