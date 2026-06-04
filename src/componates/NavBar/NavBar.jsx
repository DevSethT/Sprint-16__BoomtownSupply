import "./NavBar.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar__link" to="/">
          Home
        </Link>
        <Link className="navbar__link" to="/locations">
          Locations
        </Link>
        <Link className="navbar__link" to="/juice">
          Juice
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
