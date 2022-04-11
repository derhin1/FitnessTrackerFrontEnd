import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import {Navbar, Login, Register} from "./"
const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <Navbar />
       <Switch>
        <Route path="/Login">
          <Login />
        </Route>
         <Route path="/Register">
          <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
        </Route>
        </Switch>
    </div>
  );
};

export default App;
