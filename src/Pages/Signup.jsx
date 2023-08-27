import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [rname,setrname]=useState("")
  const [remail,setremail]=useState("")
  const [rpassword,setrpassword]=useState("")
  const navigate=useNavigate()

  function handelpost (e){
    e.preventDefault()
    let user={
      name:rname,
      email:remail,
      password:rpassword
    }
    
  
      fetch(`https://64e9af42bf99bdcc8e66e32e.mockapi.io/users`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user)
      
      })
      .then(()=>{
        alert("Success")
        setrname("")
        setremail("")
        setrpassword("")
        navigate("/login",{replace:true})
      })
     
  
  }
  return (
    <DIV>
        <div className="background-image" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/002/826/413/large_2x/close-up-business-woman-using-calculator-and-laptop-for-do-math-finance-on-wooden-desk-in-office-and-business-working-background-tax-accounting-statistics-and-analytic-research-concept-free-photo.jpg")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"800px",
     border:"1px solid black",
 }}>
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an Account</h2>
        <form className="signup-form" onSubmit={handelpost}>
          <div className="form-group">
            <label >Full Name</label>
            <input type="text" id="fullName" name="fullName" required  value={rname} onChange={(e)=>setrname(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" id="email" name="email" required   value={remail} onChange={(e)=>setremail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" id="password" name="password" required  value={rpassword} onChange={(e)=>setrpassword(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </div>
    </div>
    </div>
    </DIV>
  );
}

export default Signup;

const DIV = styled.div`


.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 

}

.signup-card {
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  text-align: center;
  padding-right: 40px;
}

.signup-card h2 {
  margin-bottom: 20px;
  color: #333333;
}

.signup-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  font-size: 14px;
  color: #333333;
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 14px;
}

.signup-button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.signup-button:hover {
  background-color: #0056b3;
}

p {
  font-size: 14px;
  margin-top: 15px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}




`