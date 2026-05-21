import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Action_Type } from '../Utils/ActionCreators'
import { CartContext } from '../Context/CartContext'

function ProductCard({ product }) {

  const { dispatch } = useContext(CartContext)

  const {
    id,
    thumbnail,
    title,
    price,
   category
  } = product

  return (
    <div className="product-card">

      {/* Image */}

      <div className="product-image-wrapper">
        <img
          src={thumbnail}
          alt={title}
          className="product-image"
        />
      </div>

      {/* Content */}

      <div className="product-content">

        <Link
          data-testid="name"
          to={`/single/${id}`}
          className="product-title"
        >
          {title}
        </Link>
        
        <h3>
          <span style={{color:"red"}}>Category</span>: {category}
        </h3>

        <p className="product-price">
          ₹ {price}
        </p>

        <button
          className="add-cart-btn"
          onClick={() => {
            dispatch({
              type: Action_Type.ADD_TO_CART,
              payload: product,
            })
          }}
        >
          Add To Cart
        </button>

      </div>
    </div>
  )
}

export default ProductCard