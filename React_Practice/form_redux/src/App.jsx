import './App.css'
import Header from './Component/Header.jsx'
import AllRoutes from "./Component/AllRoutes.jsx"
import { Flex } from "antd";
function App() {


  return (
    <>
    <Flex vertical gap="large">
      <Header />
      <div>
         <AllRoutes />
      </div>
    </Flex>
    </>
  )
}

export default App
