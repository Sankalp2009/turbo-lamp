const SearchResults = ({i,departure, duration, arrival, price}) => {
   
      return (
        <>
              <tr key={i}>
                <td>{departure}</td>
                <td>{duration}</td>
                <td>{arrival}</td>
                <td>{price}</td>
              </tr>
        </>
         
      );
    
  };
  export default SearchResults;
  