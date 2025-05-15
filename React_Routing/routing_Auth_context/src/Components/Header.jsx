import {Link} from 'react-router-dom'
const Header = () =>{
    return (
        <>
        <div style={{display:"flex", justifyContent:"space-between", fontSize:"larger"}}>
            <Link to={'/'} >Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/user'}>Users</Link>
        </div>
        </>
    )
}
export default Header