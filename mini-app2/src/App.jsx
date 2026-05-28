import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Header from './Components/Header'
function App() {
  return (
    <div>
      <Header />
      <div className='app_home'>
            <AllRoutes />
      </div>
    </div>
  )
}

export default App
