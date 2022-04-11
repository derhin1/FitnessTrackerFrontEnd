import React, {useState} from "react"; 
import { Link } from "react-router-dom";
import { login } from "../api";

    const Login = ({username, setUsername, password, setPassword, loginState, setLoginState}) => {
    const [displayError, setDisplayError ] = useState (false)

    async function loginToken(){
        const response = await login (username, password)
        {response.data.token ? localStorage.setItem ( 'token', response.data.token ) : null}
    }
    async function loginValid(){
        const response = await login (username, password)
        if (response.user){

        }
    }
    return (
        <>
        <form onSubmit={(event) => {
            event.preventDefault();

        }}>
              <input type ='text' value={username} onChange={(event)=>{setUsername(event.target.value)}} placeholder="Username"></input>
              <input type ='text' value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="Password"></input>
             <button type="submit"> Login </button>
             
          </form>
         <Link to="./Register">Don't have an account? Sign Up!</Link>
         </>
    )
}

export default Login;
