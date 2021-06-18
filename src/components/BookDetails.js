import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
  const { id } = useParams();
  const {
    data: book,
    error,
    isPending,
  } = useFetch("http://localhost:8000/books/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/books/" + book.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="book-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {book && (
        <article>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
          <div>{book.description}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BookDetails;
