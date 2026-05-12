import { RestaurantCard } from './RestaurantCard'
function RestaurantTable({ data }) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '14px',
      }}
    >
      <thead>
        <tr
          style={{
            background: 'linear-gradient(135deg, #6573af 0%, #9b86b1 100%)',
            color: 'white',
          }}
        >
          <th
            style={{
              padding: '15px',
              textAlign: 'left',
              fontWeight: '600',
              borderBottom: '2px solid #667eea',
            }}
          >
            Name
          </th>
          <th
            style={{
              padding: '15px',
              textAlign: 'left',
              fontWeight: '600',
              borderBottom: '2px solid #667eea',
            }}
          >
            Rating
          </th>
          <th
            style={{
              padding: '15px',
              textAlign: 'left',
              fontWeight: '600',
              borderBottom: '2px solid #667eea',
            }}
          >
            Type
          </th>
          <th
            style={{
              padding: '15px',
              textAlign: 'left',
              fontWeight: '600',
              borderBottom: '2px solid #667eea',
            }}
          >
            Votes
          </th>
          <th
            style={{
              padding: '15px',
              textAlign: 'left',
              fontWeight: '600',
              borderBottom: '2px solid #667eea',
            }}
          >
            Price Starts From
          </th>
        </tr>
      </thead>
      <tbody>
        {data && data.map(el => <RestaurantCard key={el.id} {...el} />)}
      </tbody>
    </table>
  )
}
export default RestaurantTable
