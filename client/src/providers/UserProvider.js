import { createContext, useContext, useState } from "react";
import { authentication } from "../data/dal";

const UserContext = createContext()

export function UserProvider(props) {
  const [user, setUser] = useState(authentication());

  return (
    <UserContext.Provider value={{user,setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = ()=>{
  return useContext(UserContext);
}