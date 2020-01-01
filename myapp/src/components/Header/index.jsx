import React from "react";
import LOGO from "../../images/site-logo.png";

const Header = props => {
  return (
    <header className="header">
      <h1 className="header-title">{props.title}</h1>
      <img src={LOGO} alt="RUI" width="100" />
    </header>
  );
};

export default Header;
