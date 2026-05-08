import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

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

export default SingleUser