import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import { GlobalInfo } from "../Context/GlobalInfo.jsx";
import {ACTION_TYPE} from "../Utils/Action_Creators.jsx";

function Edit() {
   
  const {id} = useParams();
  console.log(id);
    const nav = useNavigate();

    const { dispatch } = React.useContext(GlobalInfo);


  // Input Collection
  const [IsInput, setIsInput] = React.useState({
    title:"",
    price:"",
  })
  
  const HandleChange = async(e)=>{
    const {name, value} = e.target
    setIsInput(oldState=>({
      ...oldState,
      [name]:value,
    }))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.patch(`http://localhost:8080/Products/${id}`,{
        title:IsInput.title,
        price:Number(IsInput.price), 
      })
      console.log(response.data)
      dispatch({
        type:ACTION_TYPE.UPDATE_PRODUCTS,
        payload:{
          id:id,
          updated_data:response.data
        }
      })
     nav('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Update_Title" 
        name="title"
        value={IsInput.title}
        onChange={HandleChange}
        />
        <input 
        type="number" 
        placeholder="update_price" 
        name="price"
        value={IsInput.price}
        onChange={HandleChange}
        />
        <button type="submit" value="submit">Submit</button>
      </form>
    </div>
  )
}

export default Edit