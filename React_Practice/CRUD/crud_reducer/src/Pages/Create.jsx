import React, { useState, useEffect, useContext } from "react";
import {GlobalInfo} from "../Context/GlobalInfo.jsx";
import axios from "axios";
import {useNavigate} from 'react-router-dom' 
import {ACTION_TYPE} from "../Utils/Action_Creators";
const InitialState = {
  thumbnail:"",
  title: "",
  category: "",
  price: "",
};

function Create() {
  
  const [IsInput, setIsInput] = useState(InitialState);
  const [data, setData] = useState("");
  const {dispatch} = useContext(GlobalInfo)
  const navigate = useNavigate();

  const FetchData = async()=>{
    try {
      const Response = await axios.get("http://localhost:8080/Products");
      setData(Response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    FetchData();
  },[])

  const HandleChange = (e)=>{
    const {name, value} = e.target
    setIsInput(oldState=>({
      ...oldState,
      [name]:value
    }))
  }

  const HandleSubmit = async(e)=>{
    e.preventDefault()
    let newId = data.length>0 ? Number(data[data.length-1].id):0;
    let Updated_id = newId + 1;
   
    try {
      const Response = await axios.post("http://localhost:8080/Products",{
        id: Updated_id.toString(),
        thumbnail:IsInput.thumbnail,
        title:IsInput.title,
        category:IsInput.category,
        price:Number(IsInput.price),
      });
      dispatch({type:ACTION_TYPE.ADD_PRODUCTS, payload:Response.data})
      console.log(Response)
       navigate('/dashboard');
    } catch (error) {
      console.log(error)
    }
    console.log("submitted");
  }
 
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input 
        type="text" 
        name="thumbnail" 
        placeholder="Enter thumbnail" 
        value={IsInput.thumbnail}
        onChange={HandleChange}
        />
        <br />
        <br />
        <input 
        type="text" 
        name="title" 
        placeholder="Enter title" 
        value={IsInput.title}
        onChange={HandleChange}
        />
        <br />
        <br />
        <input 
        type="number" 
        name="price" 
        placeholder="Enter Price" 
        value={IsInput.price}
        onChange={HandleChange}
        />
        <br />
        <br />
        <select name="category"  value={IsInput.category} onChange={HandleChange}>
          <option value="">select Category</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">fragrances</option>
          <option value="furniture">furniture</option>
          <option value="groceries">groceries</option>
        </select>
        <br />
        <br />
        <button type="submit" value="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Create;