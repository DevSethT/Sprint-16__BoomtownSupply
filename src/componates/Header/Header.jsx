import "./Header.css";

import NavBar from "../NavBar/NavBar";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="#" alt="logo" className="header__logo" />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
