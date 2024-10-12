import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">BrandLogo</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/auth" className="nav-item">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
