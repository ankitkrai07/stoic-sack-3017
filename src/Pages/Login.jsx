import React from 'react';
import { styled } from 'styled-components';

function Login() {
  return (
    <DIV>
    <div className="login-page">
     
      <div className="login-container">
      <h1>I am a returning user</h1>
       
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
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