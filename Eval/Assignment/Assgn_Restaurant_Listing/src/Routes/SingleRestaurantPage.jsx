import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
function SingleRestaurantPage() {
  const params = useParams()
  const location = useLocation()
  const pathId = location?.pathname?.split('/').filter(Boolean).pop()
  const id = params?.id || pathId
  const [data, setData] = useState({})
  const { name, rating, type, number_of_votes, price_starts_from, image } = data
  const [IsLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const FetchData = async () => {
      if (!id) return
      try {
        setIsLoading(true)
        let Res = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
        )
        let ResData = await Res.json()
        setData(ResData?.data || {})
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
      <img
        data-testid="restaurant-image"
        src={image}
        alt={name}
        width={'10%'}
      />
      <div className="flex">
        <div>
          name:
          <b data-testid="restaurant-name">{name}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{type}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default SingleRestaurantPage
