import {Routes, Route, useParams, Link} from 'react-router-dom'
import Header from "./Component/Header.jsx"
import PageNotFound  from "./Component/PageNotFound.jsx"
import {useState, useEffect} from "react"
import './App.css'

function About(){
  return(
    <div>
      <h1>About</h1>
    </div>
  )
}


function Contact(){
  return(
    <div>
      <h1>Contact</h1>
    </div>
  )
}


function User(){
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1',{
      headers: {"x-api-key": "reqres-free-v1"}
    })
    .then(res => res.json())
    .then(result => setData(result));
  }, [])

  return(
    <div>
      {
        data.data && data.data?.map((el) => (
          <div key={el.id}>
            <Link to={`/${el.id}`}><img src={el.avatar} alt="image" /></Link>
            
            <h3>{el.first_name} {el.last_name}</h3>
            <h3>{el.email}</h3>
          </div>
        ))
      }
    </div>
  )
}


function SingleUser(){
   let { userId } = useParams();
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`,{
      headers: {"x-api-key": "reqres-free-v1"}
    })
    .then(res => res.json())
    .then(result => setData(result.data));
  }, [userId])

  return(
    <div>
          <div key={data.id}>
            <img src={data.avatar} alt="image" />
            <h3>{data.first_name} {data.last_name}</h3>
            <h3>{data.email}</h3>
          </div>
    </div>
  )
}
  
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/> 
      <Route path="/about" element={<About />}/> 
      <Route path="/contact" element={<Contact />}/> 
      <Route path="/user" element={<User />}/> 
      <Route path=":userId" element={<SingleUser />}/> 
      <Route path="*" element={<PageNotFound />}/> 
      </Routes>
    </>
  )
}


export default App