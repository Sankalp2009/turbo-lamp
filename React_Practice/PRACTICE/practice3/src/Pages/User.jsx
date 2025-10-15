import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthInfo } from "../Helpers/AuthInfo.jsx";
function User() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState();
  const { LogOut } = useContext(AuthInfo);
  console.log(page, limit);

  console.log(data);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}&per_page=${limit}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setPage(result.page);
        setLimit(result.per_page);
      });
  }, [page,limit]);

  return (
    <div>
      <div  style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "10px",
        }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <div>{page}</div>
        <button disabled={data.total_pages === page} onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <div>
        <button onClick={LogOut}>LogOut</button>
      </div>
      </div>
      {data.data &&
        data.data?.map((el) => (
          <div key={el.id}>
            <Link to={`/${el.id}`}>
              <img src={el.avatar} alt="image" />
            </Link>

            <h3>
              {el.first_name} {el.last_name}
            </h3>
            <h3>{el.email}</h3>
          </div>
        ))}
    </div>
  );
}

export default User;