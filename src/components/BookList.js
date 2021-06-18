import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <div className="book-preview" key={book.id}>
          <Link to={`/books/${book.id}`}>
            <h2>{book.title}</h2>
            <p>Written by {book.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
