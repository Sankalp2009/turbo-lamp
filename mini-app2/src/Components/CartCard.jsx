import { useContext } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { GlobalCart } from '../Context/CartContext'
import { Action_Type } from '../Helpers/Action_Creators'
function CartCard({product}) {

  const {dispatch } = useContext(GlobalCart);
  const {id, title, thumbnail, price } = product;
  
  return (
    <div className="cartContainer">

      <div className="cartImage">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="cartContent">
        <h3>{title}</h3>
        <p>Price:$ {Math.floor(price)}</p>
      </div>

      <button className="deleteBtn" onClick={()=>{
          dispatch({
            type:Action_Type.Remove_Cart,
            payload:id
          })
        }}>
        <FaRegTrashAlt size={20} />
      </button>

    </div>
  )
}

export default CartCard