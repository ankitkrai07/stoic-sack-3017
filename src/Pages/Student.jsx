import React from "react";
import { styled } from "styled-components";

export const Student = () => {
  const handleKeyUp = () => {};
  const handleClick = () => {};
  return (
    <DIV>
      <h1>Teaching students about tax</h1>
      <h2>
        Student Assist teaches commerce students via real-life income tax
        returns and tax calculations
      </h2>
      <div className="row">
        <div className="seven columns">
          <b>
            Apart from offering its service to individuals and corporates,
            TaxTim also provides an educational module for tax students all over
            South Africa.
          </b>
          <br />
          <br />
          By providing students with a simulated case study containing real-life
          documents and tax related information, they learn first-hand what
          questions to ask, what information to collect and most importantly,
          how to complete an individual income tax return later on in their
          professional careers.
          <br />
          <br />
          Students at UCT, Wits, UJ, Durban University of Technology, UWC (and
          many others) have enjoyed the benefits below:
          <br />
          <br />
          <ul>
            <li>Work is completed and handed-in online / via mobile phone</li>
            <li>
              Students see the results of their work (a completed return)
              instantly
            </li>
            <li>
              Marks are calculated instantly and automatically, ready for
              download.
            </li>
            <li>Students gain computer skills and work with real documents.</li>
            <li>Students learn what questions to ask their future clients.</li>
            <li>
              Detailed post-analysis shows lecturers which areas need
              reinforcement.
            </li>
          </ul>
        
          <br />
          <br />
          <span id="question"></span>
          <br />
          <br />
          <span id="answer"></span>
         
        </div>

        <div className="five_columns_greybox">
          <h3>STUDENTS START HERE!</h3>
          If you have received a TaxTim project from your lecturer, please sign
          in below:
          <br />
          <br />
          <form>
            Select your institution:
            <br />
            <select name="university">
              <option value="1">University of Cape Town</option>
              <option value="3">WITS</option>
              <option value="4">UWC Tax242</option>
              <option value="5">Rhodes University </option>
              <option value="13">University of Zululand </option>
              <option value="15">DUT Individuals </option>
              <option value="16">WSU - Individual</option>
              <option value="19">UWC TAX343</option>
              <option value="21">University of Venda</option>
              <option value="22">WSU - VAT </option>
              <option value="23">Monash University - Liza Steyn</option>
              <option value="25">NUST</option>
              <option value="26">University of Limpopo</option>
              <option value="28">TaxTim </option>
              <option value="29">DUT PMB Individual TXAN101</option>
              <option value="30">USB</option>
              <option value="31">UJ - Dip in Accounting </option>
            </select>
            <br />
            Enter your student number:
            <br />
            <input type="text" name="studentnumber" />
            <br />
            Enter your own email address:
            <br />
            <input type="text" name="emailadd" />
            <br />
            Password: (if you're new, make one up)
            <br />
            <input type="password" />
            <br />
            <br />
            <input type="checkbox" id="ownwork" /> I declare that the work I am
            about to submit is entirely my own.
            <br />
            <br />
            <input type="checkbox" id="tos" /> I accept the TaxTim .<br />
            <br />
            <b>
              NB: WRITE DOWN YOUR <u>PASSWORD</u> AND <u>EMAIL ADDRESS</u>{" "}
              NOW!!!
            </b>
            <br />
            <button type="submit">LOGIN</button>
			<br />
            <b>NB:</b> Once signed in correctly, you will see "
            <b>
              Student Mode
              
            </b>
            " at the top of the page (not visible on mobile).
            <br />
            If you don't see it, Log out and return here.
          </form>
        </div>
      </div>
    </DIV>
  );
};
const DIV = styled.div`

  padding-left: 10%;
  margin-top:50px;
  color: #3f3f3f;
  padding-right: 10%;
  .row {
    display: flex;
  }
  .five_columns_greybox {
    margin: 20px;
    
    padding: 40px;
    width: 105%;
    justify-content: center;
    background-color: #dcf1f6;
    input,select {
      border: 1px solid gray;
      border-radius: 5px;
      padding: 5px;
    }
    button {
      border-radius: 5px;
      margin-top: 18px;
	  margin-bottom: 18px;
      width: 90px;
      height: 30px;
      font-size: 20px;
      background-color: #3f3f3f;
      color: white;
      border: none;
    }
    button:hover {
      cursor: pointer;
    }
	
  }
`;
