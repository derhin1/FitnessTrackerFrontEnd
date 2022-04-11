import React, {useState} from "react";
import { register } from "../api";

const Register = ({username, setUsername, password, setPassword}) => {
    const [confirmPassword, setConfirmPassword] = useState('')
    
    async function getToken() {
    console.log(username, "username")
    console.log(password, "password")
    const response = await register(username, password);
    console.log(response)
    {
      response.data.token
        ? localStorage.setItem("token", response.data.token)
        : null;
    }
  }

    return (
        <form onSubmit={(event) => {
          event.preventDefault();
          getToken();
        }}>
            <input type ='text' value={username} onChange={(event)=>{setUsername(event.target.value)}} placeholder="Username"></input>
            <input type ='text' value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="Password"></input>
            <input type ='text' value={confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}} placeholder="Confirm Password"></input>
           <button type="submit"> Register </button>
        </form>
    )
}

export default Register