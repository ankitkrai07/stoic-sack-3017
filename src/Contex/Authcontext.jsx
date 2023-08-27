import React, { useState} from 'react'
import { createContext } from 'react'

export const authcontext =createContext()

export default function AuthContextProvider({children}) {
  const [isauth,setisauth] =useState(false)
  const [matchuser,setmatchuser] = useState("")
 


  function login(Matchuser){
    setisauth(true)
    setmatchuser(Matchuser)
    console.log(Matchuser.name)
  }
  function logout(){
    setisauth(false)
  
  }

  return (
    
   

    <authcontext.Provider value={{isauth,login,logout,matchuser}}>
             {children}
          </authcontext.Provider>
)
  
  
}