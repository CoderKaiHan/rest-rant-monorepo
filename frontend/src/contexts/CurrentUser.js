import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null);
    window.setCurrentUser = setCurrentUser;
    useEffect(() => {
        
        const getCurrentUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile')
            let user = await response.json()
            setCurrentUser(user)
        }
        getCurrentUser()
    },[])
    
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider