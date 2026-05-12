import { Link } from 'react-router-dom'

export default function RestaurantCard({
  id,
  name,
  image,
  number_of_votes,
  price_starts_from,
  rating,
  type,
}) {
  return (
    <tr data-testid="item">
       <td
        style={{
          padding: '15px',
          color: '#333',
          fontWeight: '500',
        }}
      >
        <Link
          data-testid="name"
          to={`/restaurants/${id}`}
          style={{
            color: '#667eea',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          {name}
        </Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="votes">{number_of_votes}</td>
      <td data-testid="type">
        {type
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  )
}
