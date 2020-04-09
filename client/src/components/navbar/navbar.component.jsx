import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.css';

export const Navbar = () => {
  return (
    <nav className="navbar ">
      <h1>
        <Link to="/">Ataque Duplo</Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/profiles">Students</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
