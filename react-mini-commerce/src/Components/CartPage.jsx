import {useContext} from 'react'
import { Trash } from 'lucide-react'
import { Action_Type } from '../Utils/ActionCreators'
import { CartContext } from '../Context/CartContext'
function CartPage({id, title, thumbnail, price }) {
  
  const { dispatch } = useContext(CartContext);

  return (
    <div className="cartContainer">

      <div className="cartImage">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="cartContent">
        <h3>{title}</h3>
        <p>Price: ${price}</p>
      </div>

      <button className="deleteBtn" onClick={()=>{
          dispatch({
            type:Action_Type.REMOVE_CART,
            payload:id
          })
        }}>
        <Trash size={20} />
      </button>

    </div>
  )
}

export default CartPage