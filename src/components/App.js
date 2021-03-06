import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Navbar,
  Login,
  Register,
  Routines,
  Activities,
  MyRoutines,
  Home,
} from "./";
import useAuth from "../hooks/useAuth";
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(false);
  const { setToken } = useAuth();
  function initialLoginCheck() {
    if (localStorage.getItem("token")) {
      setLoginState(true);
    } else setLoginState(false);
  }

  useEffect(() => {
    initialLoginCheck();
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [loginState]);
  return (
    <div>
      <Navbar setLoginState={setLoginState} loginState={loginState} />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Login">
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            loginState={loginState}
            setLoginState={setLoginState}
          />
        </Route>
        <Route path="/Register">
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route path="/Routines">
          <Routines />
        </Route>
        <Route path="/Activities">
          <Activities />
        </Route>
        <Route path="/MyRoutines">
          <MyRoutines loginState={loginState} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
