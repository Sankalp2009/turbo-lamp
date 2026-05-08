import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContext from './Context/AuthContext'
createRoot(document.getElementById('root')).render(
  <>
     <AuthContext>
     <ChakraProvider>
    <Router>
    <App />
    </Router>
    </ChakraProvider>
    </AuthContext>
  </>,
)