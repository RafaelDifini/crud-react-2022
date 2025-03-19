import { Children, createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from '../services/api.ts';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadData = () => {
            const storageUser = localStorage.getItem("@Context:user");
            const storageToken = localStorage.getItem("@Context:token");

            if (storageUser && storageToken) {
                setUser(storageUser);
            }
        }
        loadData();
    }, [])

    const signIn = async ({ email, senha }) => {
        debugger;
        try{
            const response = await api.post("/CriarTokenIdentity", { email: email, senha: senha, cpf: "" });
            if (response.data.error) {
                alert(response.data.error);
            }
            else {
                setUser(response.data);
    
                api.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data}`;
    
                localStorage.setItem("@Context:user", JSON.stringify({ email: email, senha: "", cpf: "" }));
                localStorage.setItem("@Context:token", response.data);
            }
        }
       catch(error)
       {
        console.log(error);
       }
    }

    const signOut = () =>{
        localStorage.clear();
        setUser(null);
        return <Navigate to="/"></Navigate>
    }

    return(
        <AuthContext.Provider value={{user,signIn, signOut, signed: !!user}}>
            {children}
        </AuthContext.Provider>
    )
};