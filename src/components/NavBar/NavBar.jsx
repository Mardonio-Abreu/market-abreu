import logo from "./logo.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <a href="index.html">
            <img className="logo" src={logo} alt="2600 logo" />
          </a>
        </li>
        <li>
          <CartWidget cantCart={3} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
