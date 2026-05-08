import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import DataContext from './Component/DataContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <DataContext>
    <App />
  </DataContext>,
)