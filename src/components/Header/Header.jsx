import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Hello Header</h2>
      <Link to="/">Home</Link>
      <Link to="login">LogIn</Link>
      <Link to="/singUp">SingUp</Link>
    </div>
  );
};

export default Header;
