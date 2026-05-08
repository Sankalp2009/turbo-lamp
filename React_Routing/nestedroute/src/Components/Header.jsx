
import {Link} from 'react-router-dom'

const Header = () =>{
    
    const link = [{
        path:'/',
        data:"Home"
    },
    {
        path:'/about',
        data:"About"
    },
    {
        path:'/product',
        data:"Product"
    }
]
    return (
        <>
        <div style={{fontSize:"larger", display:"flex", justifyContent:"space-around"}}>
         {
            link.map(elem =>(
            // eslint-disable-next-line react/jsx-key
            <div>
                <Link to={elem.path}>{elem.data}</Link>
            </div>
            ))
        }
           
        </div>
        </>
    )
}
export default Header