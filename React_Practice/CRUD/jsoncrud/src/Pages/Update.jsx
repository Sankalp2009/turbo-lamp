
import React, { useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const InitialState = {
  thumbnail: "",
  title: "",
  price: "",
};
function Update() {
  const [IsInput, setIsInput] = useState(InitialState);
  
  const {id} = useParams();
  console.log(id);
  
  const navigate = useNavigate();
  
function handleChange(e) {
    const { name, value } = e.currentTarget;
    setIsInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

async function handleSubmit(e) {
    e.preventDefault();
     try {
        const response = await axios.put(`http://localhost:8080/Products/${id}`, IsInput);
        console.log(response);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Image"
          name="thumbnail"
          value={IsInput.thumbnail}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          name="title"
          value={IsInput.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter Price"
          name="price"
          value={IsInput.price}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" value="Submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Update