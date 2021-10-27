import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-grey">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item dropdown mr-auto">
            <Link
              className="nav-link dropdown-toggle"
              to="/#"
              id="navbarDropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </Link>
            <div
              className="dropdown-menu ms-auto"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/#">
                Profile
              </Link>
              <Link className="dropdown-item" to="/orders">
                Order History
              </Link>
              <Link className="dropdown-item" to="/addressbook">
                Address
              </Link>
              <Link className="dropdown-item" to="/#">
                About
              </Link>
            </div>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reserved-books">
              Reserved Books
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item pr-5">
            <button
              className="btn btn-outline-primary pr-5 "
              data-toggle="tooltip"
              data-placement="bottom"
              title="Authentication coming soon"
            >
              Log In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
