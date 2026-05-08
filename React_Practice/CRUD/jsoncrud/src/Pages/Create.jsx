import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InitialState = {
  thumbnail: "",
  title: "",
  price: "",
};

function Create() {
  const [IsInput, setIsInput] = useState(InitialState);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  async function getUser() {
    try {
      const response = await axios.get("http://localhost:8080/Products");
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setIsInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const lastId = data.length > 0 ? Number(data[data.length - 1].id) : 0;
    const newId = lastId + 1;
    console.log("newId", newId);
    try {
      let Res = await axios.post("http://localhost:8080/Products", {
        id: newId.toString(),
        thumbnail: IsInput.thumbnail,
        title: IsInput.title,
        price: IsInput.price,
      });
      console.log(Res);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
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

export default Create;
