import {Link} from 'react-router-dom'

function ProductCard({id, thumbnail, title, price}) {
  return (
    <div className='inner'>
      <img src={thumbnail} alt={title}  />
      <h3>
          <Link
          data-testid="name"
          to={`/single/${id}`}
          style={{
            color: '#667eea',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          {title}
        </Link>
      </h3>
      <p style={{
          padding: '15px',
          color: '#27ae60',
          fontWeight: '600',
        }}>Price:{price}</p>
        <button>Add to cart</button>
    </div>
  )
}

export default ProductCard