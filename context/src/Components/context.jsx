import {createContext} from 'react';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ListContext = createContext(null)
const stories = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];
    
// eslint-disable-next-line react/prop-types
const ListContextProvider = ({children})=>{

    // eslint-disable-next-line no-unused-vars
    const [data,setData] = useState(stories)

    return(
    <ListContext.Provider value={{stories:data, update:setData}}>
    {children}
    </ListContext.Provider>)
}

export default ListContextProvider;