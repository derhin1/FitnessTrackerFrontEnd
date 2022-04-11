import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    <div id="navbar">
      <h2> Fitness Tracker </h2>
      <Link to="../Home">
        Home
      </Link>
      <Link to="../Routines">
        Routines
      </Link>
      <Link to="../MyRoutines">
        My Routines
      </Link>
      <Link to="../Activities">
        Activities
      </Link>
      <Link to="../Login">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
