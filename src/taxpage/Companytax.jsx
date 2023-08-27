// import React from 'react'

// export default function Companytax() {
//   return (
//     <div>Companytax</div>
//   )
// }


import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
const Container = styled.div`
  font-family: Arial, sans-serif;
  /* text-align: center; */
  width: 70%;
  .income {
    background-color: #eae7e7;
    width: 70%;
  }
  .income h1 {
    background-color: #6a6767;
    color: whitesmoke;
    padding: 15px 15px 15px 5px;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  /* opacity: 0;
  transition: opacity 0.5s ease-in-out; */

 
`;

const TaxText = styled.p`
  font-size: 24px;
  h1{
    font-weight: 700;
  }
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  margin-left: 10px;
`;

const InputField = styled.input`
  padding: 5px;
  font-size: 14px;
  margin-left: 10px;
`;

const CalculateButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #d83f20;
  color: white;
  border: none;
  cursor: pointer;
`;
const AdditionalInfo = styled.div`
  margin-top: 20px;
  font-size: 16px;
  text-align: start;
  width: 70%;
`;
const DIV = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items: center; /* Add this line to vertically center align items */
  text-align: end;
  padding: 10px; /* Adjust padding as needed */
  margin-bottom: 10px; /* Add margin to control spacing between DIVs */
  select{
    margin-left:10px ;
    height: 30px;
    
  }
`;

const Companytax = () => {
  const [financialYear, setFinancialYear] = useState('');
  const [totalIncome, setTotalIncome] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [animationTimer, setAnimationTimer] = useState(null)
  const [r,setr]=useState(0)

  const taxBrackets = {
    '2020': [
      { min: 0, max: 200000, rate: 0.1 },
      { min: 200001, max: 500000, rate: 0.15 },
      { min: 500001, max: Infinity, rate: 0.2 },
    ],
    '2021': [
      { min: 0, max: 300000, rate: 0.1 },
      { min: 300001, max: 700000, rate: 0.15 },
      { min: 700001, max: Infinity, rate: 0.2 },
    ],
    '2022': [
      { min: 0, max: 400000, rate: 0.1 },
      { min: 400001, max: 900000, rate: 0.15 },
      { min: 90001, max: Infinity, rate: 0.2 },
    ],
    '2023': [
      { min: 0, max: 500000, rate: 0.1 },
      { min: 500001, max: 1000000, rate: 0.15 },
      { min: 1000001, max: Infinity, rate: 0.2 },
    ],
  };

  const calculateTax = () => {
    const selectedBrackets = taxBrackets[financialYear];

    if (!selectedBrackets) {
      setTaxAmount('Invalid financial year');
      return;
    }

    let remainingIncome = totalIncome;
    let totalTax = 0;
let ratehai=0
    for (const bracket of selectedBrackets) {
      console.log(bracket)
      const { min, max, rate } = bracket;
      if (remainingIncome > 0) {
        const taxableAmount = Math.min(max - min, remainingIncome);
        const taxForBracket = taxableAmount * rate;
        // console.log(rate)
        totalTax += taxForBracket;
        console.log(totalTax)
        remainingIncome -= taxableAmount;
        console.log(remainingIncome)
        ratehai=rate
      } else {
        break;
      }
    }
    setr(ratehai*10)
    setTaxAmount('Calculating...');
// const timeout=setTi setTaxAmount('Calculating...');meout(() => {
//   setTaxAmount('Calculating...');
// }, 1000);
     // Show a temporary message

    let currentAmount = 0;
    const interval = 50; // Interval in milliseconds

    const timer = setInterval(() => {
      currentAmount += totalTax / 20; // Adjust the divisor for animation speed
      if (currentAmount >= totalTax) {
        clearInterval(timer);
        setTaxAmount(totalTax.toFixed(2));
      } else {
        setTaxAmount(currentAmount.toFixed(2));
      }
    }, interval);

    setAnimationTimer(timer);
  };
  useEffect(() => {
    // Cleanup function to clear the animation timer when the component unmounts
    return () => {
      if (animationTimer) {
        clearInterval(animationTimer);
      }
    };
  }, [animationTimer]); // Add animationTimer as a dependency

  console.log(taxAmount)

  return (
    <Container>
      <h2>Small Business Income Tax Calculator</h2>
      <h2>Work out Tax Payable on your Small Business Taxable Income</h2>
      <div className='income'>
        <h1>SMALL BUSINESS INCOME TAX CALCULATOR</h1>
        <DIV>
        
         
      <InputLabel>
        Financial Year:
        <select
          value={financialYear}
          onChange={(e) => setFinancialYear(e.target.value)}
        >
           <option value="">Select a year</option>
          <option value="2020">2020 (Mar 2019-Feb 2020)</option>
          <option value="2021">2021 (Mar 2020-Feb 2021)</option>
          <option value="2022">2022 (Mar 2021-Feb 2022)</option>
          <option value="2023">2023 (Mar 2022-Feb 2023)</option>
        </select>
      </InputLabel>
      </DIV>
     <DIV>
      
      <InputLabel>
        Total Income for Business:
        <InputField
          type="number"
          value={totalIncome}
          onChange={(e) => setTotalIncome(e.target.value)}
        />
      </InputLabel>
      </DIV>
      </div>
      
      <br />
      <CalculateButton onClick={calculateTax}>Calculate Tax</CalculateButton>
      <br />
      {taxAmount!=="" && (
        <Result>
          <TaxText>Amount you keep: <h1>R{totalIncome-taxAmount}</h1></TaxText>
          
         <AdditionalInfo>
         <hr />
         <h4>This is how you work it out:</h4>
         Taxable income: R{totalIncome}
         <br />
         <br />
         Tax = {r}% of taxable income (according to {financialYear})
         <br />
         <br />
         Tax = R{taxAmount}
         <br />
         <br />
         Profit after tax: R{totalIncome-taxAmount}
         <br />
         <br />
         </AdditionalInfo>
        </Result>
      )}
    </Container>
  );
};

export default Companytax;
