import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { authcontext } from '../Contex/Authcontext';

function Login() {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const {login,isauth}=useContext(authcontext)
  const handellogin = async (e) =>{
    e.preventDefault()
 
 
     let res=await fetch("https://64e9af42bf99bdcc8e66e32e.mockapi.io/users")
     let data= await res.json()
     console.log(data)
 
     const matchuser=data.find(
     (user)=>user.email===email && user.password===password)
     console.log(matchuser)
     if(matchuser){
      login(matchuser)
     }
    
    
 }
 if(isauth){
  return< Navigate to="/" replace={true}/>
     }
  return (
    <DIV>
    <div className="login-page">
     
      <div className="login-container">
      <h1>I am a returning user</h1>
       
        <form  onSubmit={handellogin}>
          <input type="email" placeholder="email" name="email" value={email} onChange={((e)=>setemail(e.target.value))} />
          <input type="password" placeholder="Password"  name="password" value={password}  onChange={((e)=>setpassword(e.target.value))} />
          <button type="submit">Login To My Account</button>
        </form>
      </div>
    </div>
    </DIV>
  );
}

export default Login;

const DIV = styled.div`

  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f3f3;


.login-page {
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
}

.login-container {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
}

button {
  background-color:black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff1f5a;
}


`