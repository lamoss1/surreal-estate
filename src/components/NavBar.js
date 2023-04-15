import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SurrealEstate } from "../helpers/SurrealEstate.svg";
import "../styles/navbar.css";

const NavBar = (props) => {
  const { height, width } = props;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <SurrealEstate className="navbar-logo" width={width} height={height} />
        <Link to="/">
          <h2 className="navbar-links-item">View Properties</h2>
        </Link>
        <Link to="/add-property">
          <h2 className="navbar-links-item">Add a Property</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
