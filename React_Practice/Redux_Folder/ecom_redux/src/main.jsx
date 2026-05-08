import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import GlobalInfo from './Redux/store.jsx'
import {BrowserRouter} from "react-router-dom"
console.log(GlobalInfo.getState())
createRoot(document.getElementById('root')).render(
  <Provider store={GlobalInfo}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
)
