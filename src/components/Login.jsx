import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../api";
import useAuth from "../hooks/useAuth";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  setLoginState,
}) => {
  const { user } = useAuth();
  const history = useHistory();
  const [displayError, setDisplayError] = useState(false);
  const { setToken } = useAuth();

  async function loginToken() {
    const response = await login(username, password);
    // {
    //   response.token ? localStorage.setItem("token", response.token) : null;
    // }

    if (response.token) {
      localStorage.setItem("token", response.token);
      setToken(response.token);
    }
    setLoginState(true);
  }
  async function loginValid() {
    const response = await login(username, password);
    if (response.user) {
      loginToken();
      setDisplayError(false);
      history.push("/home");

      setUsername("");
      setPassword("");
    } else {
      setLoginState(false);
      setDisplayError(true);
    }
  }
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          loginValid();
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Username"
        ></input>
        <input
          type="text"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
        ></input>
        <button type="submit"> Login </button>
        {displayError ? (
          <div> Wrong username and/or password. Try again.</div>
        ) : null}
      </form>
      <Link to="./Register">Don't have an account? Sign Up!</Link>
    </>
  );
};

export default Login;
