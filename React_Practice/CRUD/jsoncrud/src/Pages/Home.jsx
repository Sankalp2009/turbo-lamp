import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const Limit = 10;

  console.log(data);
  const navigate = useNavigate();

  async function getUser() {
    try {
      const response = await axios(
        `http://localhost:8080/Products?_page=${page}&_per_page=${Limit}`
      );
      let updated_Data = response?.data;
      setData(updated_Data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleUpdate = async (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8080/Products/${id}`);
      // Optimistically Update UI instantly for better UX
     setData((prev) => ({
  ...prev, // Keep pagination info (pages, first, last, etc.)
  data: prev.data.filter((item) => item.id !== id) // Filter the actual data array
}));
    } catch (error) {
      console.log(error);
    }
  };

  // <a href="/create">some data</a>
  // <Link to="/create">some data</Link>

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          padding: "10px",
        }}
      >
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <p>{page}</p>
        <button disabled={page >= data.pages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      <div className="Grid_card">
        {data &&
          data?.data?.map((el) => (
            <div key={el.id} className="card_buddy">
              <img src={el.thumbnail} alt="image" />
              <div className="card_content">
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <span className="price">₹{el.price}</span>
                <div style={{ display: "flex", gap: "10px", float: "right" }}>
                  <button onClick={() => handleUpdate(el?.id)}>Update</button>
                  <button onClick={() => handleDelete(el?.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default Home;

