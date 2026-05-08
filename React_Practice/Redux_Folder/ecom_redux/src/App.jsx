import './App.css'
import Dashboard from "./Pages/Dashboard.jsx"
import AllRoutes from "./Component/AllRoutes.jsx"
import Header from './Component/Header.jsx'
function App() {

  return (
    <div>
     <h1>Mini Ecommerce using Redux</h1>
     <Header />
     <AllRoutes />
    </div>
  )
}

export default App