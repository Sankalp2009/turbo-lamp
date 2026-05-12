import { Link } from 'react-router-dom'
export function RestaurantCard({
  id,
  name,
  rating,
  type,
  number_of_votes,
  price_starts_from,
  image,
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
      <td
        data-testid="rating"
        style={{
          padding: '15px',
          color: '#f39c12',
          fontWeight: '600',
        }}
      >
        {rating}
      </td>
      <td
        data-testid="type"
        style={{
          padding: '15px',
          color: '#667eea',
          fontWeight: '500',
        }}
      >
        {type}
      </td>
      <td
        data-testid="votes"
        style={{
          padding: '15px',
          color: '#555',
        }}
      >
        {number_of_votes}
      </td>
      <td
        data-testid="price"
        style={{
          padding: '15px',
          color: '#27ae60',
          fontWeight: '600',
        }}
      >
        {price_starts_from}
      </td>
    </tr>
  )
}
