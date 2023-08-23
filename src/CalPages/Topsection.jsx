import React from "react";

export default function () {
  return (<div style={{height:"250px",backgroundColor:"#eefafc"}}>
    <div style={{display:"flex",justifyContent:"flex-end",margin:"auto",width:"80%"}}>
    <div style={{width:"80%"}}>
        <h1>Do your tax with TaxTim and WIN R10,000</h1>
        <span> T&C's apply</span>
        <h4 >How do you currently do your tax?</h4>
        <button style={{margin:"0px 0px 10px"}}>SARS EFILING</button>
        <button style={{margin:"0px 10px"}}>TAX PRACTITIONER</button>
        <button style={{margin:"0px 10px"}}>AUTO-ASSESSMENT</button>
        <button style={{margin:"0px 10px"}}>NEW TO TAX</button>
      </div>
      <div style={{margin:"auto"}}>
        <img src="https://media.taxtim.com/images/media-za/reclining-man.png" alt="" style={{width:"50%",alignItems:"center",marginLeft:"30%"}}/>
      </div>
    </div>
    </div>
  );
}
