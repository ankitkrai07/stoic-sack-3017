import React, { useState } from "react";
import styled from "styled-components";
import Acoordian from "./Acoordian";

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
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.show {
    opacity: 1;
  }
`;

const TaxText = styled.p`
  font-size: 24px;
  h1{
    font-weight: 700;
  }
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  margin-right: 10px;
`;

const InputField = styled.input`
  padding: 5px;
  font-size: 14px;
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
  justify-content: space-between;
  align-items: center; /* Add this line to vertically center align items */
  text-align: end;
  padding: 10px; /* Adjust padding as needed */
  margin-bottom: 10px; /* Add margin to control spacing between DIVs */
`;

function SalaryTaxCalculator() {
  const [date, setdate] = useState("");
  const [income, setIncome] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [calculatedTax, setCalculatedTax] = useState(0);
  const [animatedTax, setAnimatedTax] = useState("");

  const [pf, setpf] = useState(0);
  const [travelAllowance, settravel] = useState(0);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const taxBrackets = [
    // Tax brackets configuration...
    { range: [0, 250000], rate: 0 },
    { range: [250001, 500000], rate: 0.05 },
    { range: [500001, 800000], rate: 0.1 },
    { range: [800001, 1000000], rate: 0.15 },
    { range: [1000001, 1500000], rate: 0.2 },
    {range:[1500001,Infinity],rate:0.25},
  ];

  const calculateSalaryTax = () => {
    let totalTax = 0;

    for (const bracket of taxBrackets) {
      const [lower, upper] = bracket.range;
    console.log(bracket)
      const taxableAmount = Math.min(income, upper) - lower;
console.log(taxableAmount)
      if (taxableAmount > 0) {
        totalTax += taxableAmount * bracket.rate;
        console.log(totalTax)
      } else {
        break;
      }
    }

    return totalTax.toFixed(2);
  };
  const calculateTaxableIncome = () => {
    const taxableIncome = income - pf - 0.2 * travelAllowance;
    return taxableIncome.toFixed(2);
  };

  const animateTaxAmount = () => {
    const taxAmount = calculateSalaryTax();
    let currentAmount = "";

    const animate = (index) => {
      if (index <= taxAmount.length) {
        currentAmount = taxAmount.substring(0, index);
        setAnimatedTax(currentAmount);
        setTimeout(() => animate(index + 1), 100); // Adjust the delay for desired animation speed
      }
    };

    animate(1);
  };

  const handleCalculate = () => {
    if (income === 0) {
      alert("Fill Details");
    } else {
      setCalculatedTax(calculateSalaryTax());
      animateTaxAmount();
      const calculatedTaxableIncome = calculateTaxableIncome();
      setTaxableIncome(calculatedTaxableIncome);
      setShowResult(true);
    }
  };

  return (
    <Container>
      <h2>Salary Tax Calculator</h2>
      <h3>Work out salary tax (PAYE), UIF, taxable income and what tax rates you will pay</h3>
      <div className="income">
        <h1>INCOME</h1>
        <DIV>
          <InputLabel>Which tax year would you like to calculate?</InputLabel>
          <select
          value={date}
          onChange={(e) => setdate(e.target.value)}
        >
          <option value="">Select a year</option>
          <option value="2020">2020 (Mar 2019-Feb 2020)</option>
          <option value="2021">2021 (Mar 2020-Feb 2021)</option>
          <option value="2022">2022 (Mar 2021-Feb 2022)</option>
          <option value="2023">2023 (Mar 2022-Feb 2023)</option>
        </select>
        </DIV>
        <DIV>
          <InputLabel>What is your total salary before deductions?</InputLabel>
          <InputField
            type="number"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
          />
        </DIV>
      </div>
      <br />
      <Acoordian
        pf={pf}
        travelAllowance={travelAllowance}
        settravel={settravel}
        setpf={setpf}
      />
      <CalculateButton onClick={handleCalculate}>Calculate Tax</CalculateButton>

      {showResult && (
        <Result className="show">
          <TaxText>Take home pay: <h1>R{taxableIncome-calculatedTax}</h1> </TaxText>
          <AdditionalInfo>
            In the previous year this would have been R{income} (now R141
            more!).
            <br />
            <hr />
            This is how you work it out:
            <br />
            <hr />
            Taxable income = Annual gross salary - Pension / Provident / RAF -
            20% of travel allowance (You are taxed on 80% of the travel
            allowance in your Gross salary, so we subtract 20% for the
            calculation of Taxable income.)
            <br />
            <br />
            Taxable income according to allowance= R{income} - R{pf} - (0.2 * R
            {travelAllowance})
            <br />
            <br />
            Taxable income for the year: R{taxableIncome}
            <br />
            <br />
            Tax you will pay / PAYE (Pay As You Earn) for your age group and
            income bracket: <h4> R{calculatedTax} </h4> (as per PAYE tables provided by
            SARS)
            <br />
            <br />
            Take home pay = R{taxableIncome} - R{calculatedTax}
            <br />
            <br />
            Take home pay:
            <br />
            <span style={{fontSize:"24px" ,fontWeight:"bold"}}> R{(taxableIncome - calculatedTax).toFixed(2)}</span> per Year :
          <br />
          <br />
          </AdditionalInfo>
        </Result>
      )}
    </Container>
  );
}

export default SalaryTaxCalculator;
