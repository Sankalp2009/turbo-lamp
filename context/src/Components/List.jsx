/* eslint-disable react/prop-types */
import Item from './../Pages/Item';
const List = ({list})=> {
    console.log(list);
    return(
        <>
        <h1>List Component</h1>
        {list.map(({objectID,...item})=>(<Item key={objectID} {...item} />))}
        </>
    )
}

export default List;