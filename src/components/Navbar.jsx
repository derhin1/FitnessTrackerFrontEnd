import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ loginState, setLoginState }) => {
  const history = useHistory();

  return (
    <div id="navbar">
      <h2> Fitness Tracker </h2>
      <Link to="../Home">Home</Link>
      <Link to="../Routines">Routines</Link>
      <Link to="../Activities">Activities</Link>
      {loginState ? (
        <Link to="../MyRoutines">My Routines</Link>
      ) : (
        <Link to="../Login">Login</Link>
      )}
      {loginState ? (
        <form
          onSubmit={() => {
            setLoginState(false);
            localStorage.clear();
            history.push("/home");
          }}
        >
          <button type="submit"> Sign Out</button>
        </form>
      ) : null}
    </div>
  );
};

export default Navbar;
