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

  useEffect(() => {
    if (id) {
      FetchData()
    }
  }, [id])

  return (
    <div data-testid="restaurant-container">
      <div data-testid="restaurant-name">{name}</div>
      <div data-testid="restaurant-type">{type}</div>
      <div data-testid="restaurant-rating">{rating}</div>
      <div data-testid="restaurant-votes">{number_of_votes}</div>
      <div data-testid="restaurant-price">
        {price_starts_from}
      </div>
      <div>
        <img data-testid="restaurant-image" src={image} width={'100px'} />
      </div>
    </div>
  )
}
export default SingleRestaurantPage
