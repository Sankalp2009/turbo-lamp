import { Trash } from 'lucide-react'

function CartPage({ title, thumbnail, price }) {

  return (
    <div className="cartContainer">

      <div className="cartImage">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="cartContent">
        <h3>{title}</h3>
        <p>Price: ${price}</p>
      </div>

      <button className="deleteBtn">
        <Trash size={20} />
      </button>

    </div>
  )
}

export default CartPage