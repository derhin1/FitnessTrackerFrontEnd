import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar, Login, Register, Routines, Activities } from "./";
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(false);

  function initialLoginCheck() {
    if (localStorage.getItem("token")) {
      setLoginState(true);
    } else setLoginState(false);
  }

  useEffect(() => {
    initialLoginCheck();
  }, []);

  return (
    <div>
      <Navbar setLoginState={setLoginState} loginState={loginState} />
      <Switch>
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
          <Routines loginState={loginState}/>
        </Route>
        <Route path="/Activities">
          <Activities />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
