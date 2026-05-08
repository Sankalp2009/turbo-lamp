import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Jeans from './Jeans';
import Shirt from './Shirt';
const Product = ()=>{
    
    return(
        <>
        <div style={{fontSize:"larger", display:"flex", justifyContent:"space-around"}}>
        <Link to="jeans" element={<Jeans />}>Jeans</Link>
        <Link to="shirt" element={<Shirt />}>Shirts</Link>
        </div>
        <Outlet />
        </>  
)}
export default Product