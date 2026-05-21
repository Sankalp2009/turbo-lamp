import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Action_Type } from '../Utils/ActionCreators'
import { CartContext } from '../Context/CartContext'
function ProductCard({product}) {
  
  const { dispatch } = useContext(CartContext)
  const {id, thumbnail, title, price} = product;

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
        <button 
        onClick={()=>{
          dispatch({
            type:Action_Type.ADD_TO_CART,
            payload: product || []
          })
        }}
        >Add to cart</button>
    </div>
  )
}

export default ProductCard