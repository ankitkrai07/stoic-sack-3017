import React from 'react'
import {styled} from "styled-components"
export default function Sidecheck() {
  return (
    <DIV>
        <div>Sidecheck</div>
      <div className='img'>
        <img src="https://media.taxtim.com/images/tim_full.svg" alt="loading" />
        <h3>Do your Tax Return in 20 minutes or less!</h3>
      </div>
      <h4>TaxTim will help you:</h4>
      <span><img src="https://media.taxtim.com/images/icon_tick_circle.svg" alt="" /> {"  "}Do Your Tax Return Easily</span>  <span><img src="https://media.taxtim.com/images/icon_tick_circle.svg" alt="" />{"  "}Avoid penalties</span>
      <span><img src="https://media.taxtim.com/images/icon_tick_circle.svg" alt="" /> {"  "}Maximise your refund</span>
<p className='ptag'>Tim uses your answers to complete your income tax return instantly and professionally, with everything filled in in the right place.
</p>
<p className='ptag'>Let Tim submit your tax return direct to SARS in just a few clicks!</p>
<button >GET STARTED</button>
    </DIV>
  )
}
const DIV=styled.div`
width: 30%;
.img{
    display: flex;
    
}
.img img{
width: 100px;
margin-right: 20px;
}
span{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
span img{
    margin-right: 10px;
    width: 20px;
}
.ptag{
  
  text-align: start;
}
button{
    height: 30px;
    background-color: #4b4848;
    color: white;
    border-radius: 10px;
    border: none;
}
`