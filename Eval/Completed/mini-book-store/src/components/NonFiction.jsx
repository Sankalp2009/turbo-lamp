import data from '../nonfiction.json'
import BookCard from './BookCard.jsx';
export default function NonFiction() {
    console.log(data);
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>{'Non-Fiction Books'}</h1>

      <div className="books-container">
         {
          data.length === 0 ? (<h2>No Data Found</h2>
          ) : (
            data && data.map(el=>(
              <BookCard {...el} />
            ))
          )
        }
      </div> 
    </div>
  );
}