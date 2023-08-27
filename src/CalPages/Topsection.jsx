import React from "react";
import { styled } from "styled-components";

export default function  Topsection() {
  return (<DIV >
    <div style={{display:"flex",justifyContent:"flex-end",margin:"auto",width:"80%"}}>
    <div style={{width:"80%"}}>
        <h2>Do your tax with EzTax and WIN R10,000  <span style={{fontSize:"12px"}}> T&C's apply</span></h2>
       
        <h4 >How do you currently do your tax?</h4>
        <div >
        <button >SARS EFILING</button>
        <button>TAX PRACTITIONER</button>
        <button >AUTO-ASSESSMENT</button>
        <button >NEW TO TAX</button>
        </div>
      </div>
      <div className="image" >
        <img src="https://media.taxtim.com/images/media-za/reclining-man.png" alt="loadin" />
      </div>
    </div>
    </DIV>
  );
}
const DIV=styled.div`
/* style={{height:"250px",backgroundColor:"#eefafc"}} */
height: 250px;
background-color: #eefafc;
button{
    margin: 5px 0px 0px 10px;
    height: 30px;
    background-color: #4b4848;
    color: white;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(116, 132, 149, 0.2) 0px 8px 24px;

}
button:hover{
    background-color: #171616;
}
.image{
    margin: auto;
}
.image img{
   
    width: 50%;
    align-items: center;
    margin-left: 30%;
}
`
