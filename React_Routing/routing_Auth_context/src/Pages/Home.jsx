import {Button} from '@chakra-ui/react'
import { GlobalInfo } from './../Context/AuthContext';
import {useContext} from 'react'
import { Navigate } from 'react-router-dom';
const Home = () =>{

    const {isAuth,ToggleAuth} = useContext(GlobalInfo)
     
    if(!isAuth){
        return <Navigate to="/user" />
    }
    return (
        <>
        <h1>Home</h1>
        <Button onClick={ToggleAuth}>Login</Button>
        </>
    )
}

export default Home