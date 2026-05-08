import './App.css'
import { Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import Jeans from './Pages/Jeans';
import Shirt from './Pages/Shirt';
function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/about'} element={<About />}/>
      <Route path={'product'} element={<Product/>}>
       <Route path="jeans" element={<Jeans />} />
       <Route path="shirt" element={<Shirt />} />
      </Route>
    </Routes>
    </>  
  )}
export default App