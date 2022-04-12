import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";
import { getMe } from "../api";


const AuthProvider = ({children}) => {
const [user, setUser] = useState ({})
const [token, setToken] = useState (null)

useEffect(() => {
    async function getUser () {
        if (localStorage.getItem("token")){
            const newUser = await getMe (localStorage.getItem("token"))
            console.log (newUser, "testing")
            setUser (newUser)
        }else{
            setUser({})
        }
    }
    getUser ()
},[token])

return (
    <AuthContext.Provider value = {{user, setUser, token, setToken}}>
        {children}
    </AuthContext.Provider>

)
}
export default AuthProvider
