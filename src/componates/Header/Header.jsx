import "./Header.css";

import NavBar from "../NavBar/NavBar";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src="#" alt="logo" className="header__logo" />
      <NavBar />
    </header>
  );
}

export default Header;
