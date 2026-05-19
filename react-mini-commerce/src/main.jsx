import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './Context/AuthContext'
import DataContextProvider from './Context/DataContext.jsx'
import CartContextProvider from './Context/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <DataContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </DataContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
)