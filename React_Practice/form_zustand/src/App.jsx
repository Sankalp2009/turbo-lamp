
import './App.css'
import AllRoutes from './Component/AllRoutes.jsx'
import Header from "./Component/Header.jsx"
import { Box, Flex, Spacer } from '@chakra-ui/react'
function App() {


  return (
    <Flex direction="column" gap='7'>
     <Header />
     <AllRoutes />
    </Flex>
  )
}

export default App
