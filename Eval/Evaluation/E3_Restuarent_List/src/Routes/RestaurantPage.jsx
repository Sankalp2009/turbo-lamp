import Loader from "../Components/Loader";
import {useParams} from 'react-router-dom'
import {useState, useEffect}  from 'react'
import { getRestaurantsList } from '../Services/API.js'
function RestaurantPage() {

  const [product, setProduct] = useState({});
  const [IsLoading, setIsLoading] = useState(false)
  const {id} = useParams()
  console.log(product)
 
  useEffect(() => {
    const FetchData = async () => {
      if (!id) return
      try {
        setIsLoading(true)
        let Res = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
        )
        let ResData = await Res.json()
        setProduct(ResData?.data || {})
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    if (id) {
      FetchData()
    }
  }, [id])

  return (
    <div data-testid="restaurant-container">
      {
        IsLoading && <div data-testid="loading-container"><Loader /></div>
      }
      <img data-testid="restaurant-image" src={product?.image} width={"100%"} />
      <div className="flex">
        <div>
          name:
        <b data-testid="restaurant-name">{product?.name}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{product?.type}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{product?.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{product?.number_of_votes
}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{product?.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
