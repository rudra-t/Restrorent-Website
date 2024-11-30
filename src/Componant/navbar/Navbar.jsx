import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="Nav" className="Container">
      <div className="Nav-brand">Tinderfy</div>
      <div className="Nav-links">
        <a href="#About">
          <li>About</li>
        </a>
        <a href="#Food-Menu">
          <li>Menu</li>
        </a>
        <a href="#Service">
          <li>Services</li>
        </a>
        <a href="#Footer">
          <li>Footer</li>
        </a>
      </div>
      <div className="cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <Link to="/Login" className="login-button" alt="Button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
