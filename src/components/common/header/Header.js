import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center background-color">
          <h2 className="background-color"> Logo and additional details</h2>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <NavLink className="nav-item nav-link" to="/" exact>
            Home
          </NavLink>
          {" | "}
          <NavLink className="nav-item nav-link" to="/courses">
            Courses
          </NavLink>
          {" | "}
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default HomePage;
