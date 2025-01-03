/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Item = ({ title, url, author, num_comments, points }) =>{
    return(
        <>
       
        <ul>
        <li>
<span>
<a href={url}>{title}</a>
</span>
<span>{author}</span>
<span>{num_comments}</span>
<span>{points}</span>
</li>
        </ul>
        </>
    );
}

export default Item;