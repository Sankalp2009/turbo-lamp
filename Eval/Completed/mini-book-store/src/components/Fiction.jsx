import data from '../fiction.json'
import BookCard from './BookCard.jsx';
export default function Fiction() {
  console.log(data);
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>{'Fictional Books'}</h1>

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
