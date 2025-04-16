import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-brown text-white p-4 flex justify-between">
      <h2 className="font-bold text-xl">Eliana's Portfolio</h2>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
