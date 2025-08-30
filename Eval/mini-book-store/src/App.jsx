import "./App.css"
import Fiction from './components/Fiction';
import NonFiction from './components/NonFiction';
import { useState } from 'react';
function App() {

  const [showBook, setShowBook] = useState(true)
  
  const HandleToggle = ()=>{
    setShowBook((prev)=>!prev)
  }

  return (
    <div id ="Main">
      <h1>Mini Book Store</h1>
      
      <button className='Btn' data-testid="toggle-btn" onClick={HandleToggle}>{showBook ? "Non-Fiction Books" : "Fictional Books"}</button>

      <div data-testid="conditional-container">
        {showBook ? <Fiction /> : <NonFiction />}
      </div>
    </div>
  );
}

export default App;