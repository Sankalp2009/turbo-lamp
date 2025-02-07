import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function getData(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

const SingleUser = () => {
  const { id } = useParams();

  const [recipeData, setRecipeData] = useState({});
  useEffect(() => {
    getData(`https://dummyjson.com/recipes/${id}`).then((data) =>
      setRecipeData(data)
    );
  }, [id]);
  console.log(recipeData);

  return (
    <>
      <h1>SingleRecipes</h1>
      <div className={"box-container"}>
        <div key={recipeData.id}>
          <img src={recipeData.image} alt={"image"} />
          <h3>{recipeData.name}</h3>
        </div>
      </div>
    </>
  );
};

export default SingleUser;