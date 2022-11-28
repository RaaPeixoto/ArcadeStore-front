import { createContext, useState} from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {

    const [user,setUser] = useState ({userName:localStorage.getItem("userName"),type:localStorage.getItem("type")})

    
    return(
        <UserContext.Provider value = {{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}