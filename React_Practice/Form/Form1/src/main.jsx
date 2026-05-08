import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import FormContext from './Utils/FormContext.jsx'
createRoot(document.getElementById('root')).render(
  <FormContext>
    <App />
  </FormContext>,
)
