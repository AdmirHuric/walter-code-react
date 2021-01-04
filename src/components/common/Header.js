import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="bg-light py-2 px-2">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/search" activeStyle={activeStyle}>
        Search
      </NavLink>
    </nav>
  );
};

export default Header;
