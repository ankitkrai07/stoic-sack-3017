import React from "react";
import { styled } from "styled-components";
export default function Sidecheck() {
  return (
    <DIV>
     
      <div className="img">
        <img src="https://media.taxtim.com/images/tim_full.svg" alt="loading" />
        <h3>Do your Tax Return in 20 minutes or less!</h3>
      </div>
      <h4>Eztax will help you:</h4>
      <span>
        <img
          src="https://media.taxtim.com/images/icon_tick_circle.svg"
          alt="loading"
        />{" "}
        {"  "}Do Your Tax Return Easily
      </span>{" "}
      <span>
        <img
          src="https://media.taxtim.com/images/icon_tick_circle.svg"
          alt="loading"
        />
        {"  "}Avoid penalties
      </span>
      <span>
        <img
          src="https://media.taxtim.com/images/icon_tick_circle.svg"
          alt="loading"
        />{" "}
        {"  "}Maximise your refund
      </span>
      <p className="ptag">
        Tim uses your answers to complete your income tax return instantly and
        professionally, with everything filled in in the right place.
      </p>
      <p className="ptag">
        Let Tim submit your tax return direct to SARS in just a few clicks!
      </p>
      <button className="last">GET STARTED</button>
    </DIV>
  );
}
const DIV = styled.div`
  width: 30%;
  .img {
    display: flex;
  }
  .img img {
    width: 100px;
    margin-right: 20px;
  }
  span {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  span img {
    margin-right: 10px;
    width: 20px;
  }
  .ptag {
    margin-bottom: 16px;
    text-align: start;
  }
  button {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    height: 30px;
    background-color: #4b4848;
    color: white;
    border-radius: 10px;
    border: none;
  }
  .last{
    margin-bottom: 20px;
  }
  button:hover{
    background-color: #171616;
}
`;
