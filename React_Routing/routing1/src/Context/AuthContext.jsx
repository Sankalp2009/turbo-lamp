import { useState, createContext} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalInfo = createContext();

// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) =>{

    const [isAuth, setIsAuth] = useState(false);
    
    const ToggleAuth = () =>{
        setIsAuth(!isAuth);
    }
    return (
        <GlobalInfo.Provider value={{isAuth, ToggleAuth}}>
            {children}
        </GlobalInfo.Provider>
    )
}

export default AuthContext