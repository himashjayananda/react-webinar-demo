import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();

  const { data: authors, isPending } = useFetch(
    "http://localhost:8000/authors/"
  );

  useEffect(() => {
    if (!author && authors) setAuthor(authors[0].name);
  }, [authors, author]);

  const handleSubmit = e => {
    e.preventDefault();
    const book = { title, description, author };

    fetch("http://localhost:8000/books/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Book description:</label>
        <textarea
          required
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <label>Book author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          {isPending && <option>Loading...</option>}
          {authors &&
            authors.map(author => (
              <option value={author.name} key={author.id}>
                {author.name}
              </option>
            ))}
        </select>
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default Create;
