import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Book Club</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className={"create"}>
          New Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
