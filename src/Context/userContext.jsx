import { createContext, useEffect, useState } from "react";
import React from 'react'


export let UserContext = createContext(0);





export default function UserContextProvider(props) {

    const [UserLogin, setUserLogin] = useState(null);


    useEffect(() => {
      

        if(localStorage.getItem('userToken')!==null)
            {

                setUserLogin(localStorage.getItem('userToken'))

            }
    
     
    }, [])
    


  return <>
  
  

    <UserContext.Provider value={{UserLogin , setUserLogin }} >
        
        
        {props.children}
    
    
    
    </UserContext.Provider>

  
  
  </>
}

