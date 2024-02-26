import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage["token"]

    useEffect(() => {
        const storedToken = token;
        if(storedToken){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    }, [token]);
  
    return (
        <AuthContext.Provider value={isLoggedIn} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;