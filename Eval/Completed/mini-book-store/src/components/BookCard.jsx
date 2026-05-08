export default function BookCard({ title, author, img, price, year }) {
  return (
    <div className="book-card" data-testid="book-card">
      <img src={img} alt={"Imag"} />
      <b>
        <div data-testid="book-card-title">
          {title}
          <span>({year})</span>
        </div>
      </b>
      <div data-testid="book-card-author">{author}</div>
      <div data-testid="book-card-price">{`Price: ${price}Rs`}</div>
    </div>
  );
}
