import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest } from "api/auth";
import Cookies from "js-cookie";
import { verificarToken } from "api/auth";


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context)
        throw new Error("useAuth must be used within an Authprovider");
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errores, setErrors] = useState([]);

    const signUp = async (user) => {

        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            
            console.log(error.response.data)
            setErrors(error.response.data);
            
        }
    };

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)

            // if(Array.isArray(error.response.data)){
            //     return setErrors(error.response.data)
            // }
            // // console.log(error.response.data)
            // setErrors([error.response.data]);
        }
    };

    useEffect(() => {
      if(errores.length>0){
        const timer = setTimeout(()=>{
            setErrors([])
        }, 5000)
        return () => clearTimeout(timer)
      }
    }, [errores])
    
    useEffect(() => {
        async function checkLogin ()  {
                 const cookies = Cookies.get();
     console.log(cookies.token)

     if(cookies.token){
        try {
            const res = await verificarToken(cookies.token)
            console.log(res)
            if(!res.data)setIsAuthenticated(false)
                isAuthenticated(true)
                setUser(res.data)
        } catch (error) {
            setIsAuthenticated(false)
            setUser(null)
        }
     }
        }
        checkLogin();
    }, [])
    

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signUp,
                user,
                isAuthenticated,
                errores
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}