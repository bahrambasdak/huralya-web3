import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const context = createContext(undefined);


const AuthProvider = ({children}) => {
    const [authState , setAuthState]= useState({
        connectWalletBtn:'notConnect',
    })
    return ( <context.Provider value={{authState,setAuthState}}>
{children}
    </context.Provider> );
}
 

const useAuth =()=>{
    const authContext=useContext(context);
    if(authContext===undefined) throw new Error('useAuth must to be in the AuthProvider');
    else return authContext;
}
export  {AuthProvider , useAuth};