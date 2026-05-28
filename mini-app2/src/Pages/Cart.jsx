import { useContext } from 'react'
import { GlobalCart } from '../Context/CartContext'
import CartPage from '../Components/CartPage'
function Cart() {
  const {CartState } = useContext(GlobalCart);
  console.log(CartState?.Cart_Data);
  return (
    <div>
      <CartPage data={CartState?.Cart_Data} />
    </div>
  )
}

export default Cart