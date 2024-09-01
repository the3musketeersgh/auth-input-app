import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="A Canvas" />
      <h1>ReactArt</h1>
      <p>A community of artist and art-lovers.</p>
    </header>
  );
}

export default Header;
