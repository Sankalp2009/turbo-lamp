import Loader from '../Components/Loader'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
function RestaurantPage() {
  const [product, setProduct] = useState(null)
  const [IsLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const FetchData = async () => {
      if (!id) return
      try {
        setIsLoading(true)
        let Res = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
        )
        let ResData = await Res.json()
        console.log(ResData?.data)
        setProduct(ResData?.data)
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
    <div>
      {IsLoading && <Loader />}

      {!IsLoading && product && (
        <div data-testid="restaurant-container">
          <img
            data-testid="restaurant-image"
            src={product.image}
            alt={product.name}
            width="100%"
          />

          <div className="flex">
            <div>
              <b data-testid="restaurant-name">{product.name}</b>
            </div>
          </div>

          <div className="flex">
            <div>
              Type:
              <b data-testid="restaurant-type">{product.type}</b>
            </div>

            <div>
              Rating:
              <b data-testid="restaurant-rating">{product.rating}</b>
            </div>
          </div>

          <div className="flex">
            <div>
              Votes:
              <b data-testid="restaurant-votes">{product.number_of_votes}</b>
            </div>

            <div>
              Starting Price:
              <b data-testid="restaurant-price">{product.price_starts_from}</b>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default RestaurantPage