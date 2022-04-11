import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import {Navbar, Login, Register} from "./"
  const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginState, setLoginState] = useState(false)

  return (
    <div>
      <Navbar />
       <Switch>
        <Route path="/Login">
          <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} loginState = {loginState} setLoginState={setLoginState} />
        </Route>
         <Route path="/Register">
          
        <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
        
        </Route>
        </Switch>
    </div>
  );
};

export default App;
