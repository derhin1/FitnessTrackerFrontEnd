import React, { useState } from "react";
import { register } from "../api";
import { useHistory } from "react-router-dom";

const Register = ({ username, setUsername, password, setPassword }) => {
  const history = useHistory();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  function valid() {
    if (password.length >= 8) {
      setPasswordLength(false);
      if (password === confirmPassword) {
        setValidated(false);
        getToken();
        history.push("/Login");
        setUsername("");
        setPassword("");
      } else {
        setValidated(true);
      }
    } else {
      setPasswordLength(true);
    }
  }

  async function getToken() {
    console.log(username, "username");
    console.log(password, "password");
    const response = await register(username, password);
    console.log(response.token, "response token");
    {
      response.token ? localStorage.setItem("token", response.token) : null;
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        valid();
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
      <input
        type="text"
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
        placeholder="Confirm Password"
      ></input>
      <button type="submit"> Register </button>
      {validated ? <div>Password don't match</div> : null}
      {passwordLength ? <div> Password is too short</div> : null}
    </form>
  );
};

export default Register;
