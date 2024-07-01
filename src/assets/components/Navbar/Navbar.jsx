import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar({ items }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          {" "}
          <Link to="/login">Login</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
