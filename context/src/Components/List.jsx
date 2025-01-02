/* eslint-disable react/prop-types */

const List = ({list})=> {
    // eslint-disable-next-line react/prop-types
    console.log(list);
    return(
        <>
        <h1>List Component</h1>
        <div>
        <ul style={{textAlign:"center"}}>
{list.map((item) => (
<li key={item.objectID}>
<span style={{paddingRight:"12px"}} >
<a href={item.url}>{item.title}</a>
</span>
<span>{item.author}</span>
<span>{item.num_comments}</span>
<span>{item.points}</span>
</li>
))}
</ul>
        </div>
        </>
    )
}

export default List;