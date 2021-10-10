import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="NavBar">
      <h5>
        <Link to="/">Home</Link>
      </h5>
      <h5>
        <Link to="/ProductList">Our Products</Link>
      </h5>
      <h5>
        <Link to="/Detail">Details</Link>
      </h5>
    </div>
  );
}

export default NavBar;
