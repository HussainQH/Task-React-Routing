import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">
        <img src="https://cdn.dribbble.com/users/1178921/screenshots/6025265/mochawalk-shot_261.png" />
      </Link>

      <h5>
        <Link to="/ProductList">Our Products</Link>
      </h5>
      <h5>
        <Link to="/">Home</Link>
      </h5>
    </div>
  );
}

export default NavBar;
