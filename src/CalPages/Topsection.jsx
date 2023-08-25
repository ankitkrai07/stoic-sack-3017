import React from "react";
import { styled } from "styled-components";

export default function () {
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
      <div style={{margin:"auto"}}>
        <img src="https://media.taxtim.com/images/media-za/reclining-man.png" alt="" style={{width:"50%",alignItems:"center",marginLeft:"30%"}}/>
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

}
`
