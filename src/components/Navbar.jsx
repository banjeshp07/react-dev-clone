import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container d-flex align-items-center">

        {/* React logo */}
        <NavLink className="navbar-brand d-flex align-items-center me-3" to="/">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React Logo" 
            width="40" 
            height="40"
            className="me-2"
          />
          React
        </NavLink>

        {/* Search bar */}
        <form className="d-flex flex-grow-1 me-3" role="search">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search docs" 
            aria-label="Search" 
          />
        </form>

        {/* Hamburger toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/docs">Docs</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/tutorial">Tutorial</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/community">Community</NavLink></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
