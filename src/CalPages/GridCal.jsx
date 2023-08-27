import React from 'react'
import {styled} from "styled-components"
import Gridcalcard from './Gridcalcard'
import Gridcaltwocard from './Gridcaltwocard'
const jsondata=[
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/income-tax",
      "image": "https://www.taxtim.com/za/images/calc-income-tax.png",
      "title": "How to calculate how much PAYE and UIF will be deducted from your salary in order to work out your take home pay",
      "label": "Salary Tax"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/tax-refund",
      "image": "https://www.taxtim.com/za/images/calc-refund.png",
      "title": "How to calculate what your Tax Refund will be when you submit your tax return to SARS",
      "label": "Tax Refund"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/retirement-fund-lump-sum-tax",
      "image": "https://www.taxtim.com/za/images/calc-lump-sum.png",
      "title": "How to calculate the tax payable on Pension, Provident or Retirement Annuity Fund lump sums due to voluntary withdrawal, retirement, retrenchment or death",
      "label": "Retirement Lump Sum"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/travel-allowance",
      "image": "https://www.taxtim.com/za/images/calc-travel.png",
      "title": "How to maximise your travel deduction by comparing the different methods you can use",
      "label": "Travel Deduction"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/capital-gains-tax",
      "image": "https://www.taxtim.com/za/images/calc-capital-gains.png",
      "title": "How to calculate Capital Gains Tax on the disposal of your asset",
      "label": "Capital Gains Tax"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/medical-aid-credits",
      "image": "https://www.taxtim.com/za/images/calc-health.png",
      "title": "How to calculate your medical tax credit/rebate",
      "label": "Medical Aid Credits"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/wear-and-tear",
      "image": "https://www.taxtim.com/za/images/calc-wear-and-tear.png",
      "title": "How to calculate the Section 11(e) Depreciation / Wear and Tear deduction on the assets you use for work",
      "label": "Wear & Tear"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/retirement-savings",
      "image": "https://www.taxtim.com/za/images/calc-retirement.png",
      "title": "Retirement savings calculator",
      "label": "Retirement Savings"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/local-interest",
      "image": "https://www.taxtim.com/za/images/calc-manufacturing-wear-and-tear.png",
      "title": "Taxable local interest calculator",
      "label": "Taxable Local Interest"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/taxable-foreign-dividends",
      "image": "https://www.taxtim.com/za/images/calc-income-tax.png",
      "title": "How to calculate the amount of foreign dividends on taxable on your income tax assessment",
      "label": "Foreign Dividends"
    },
    {
      "calc-icon href": "https://www.taxtim.com/za/calculators/home-office-expense-calculator",
      "image": "https://www.taxtim.com/za/images/calc-capital-gains.png",
      "title": "How to claim your home office expenses when working from home",
      "label": "Home Office Calculator"
    }
   ]
   const compjsondata=[
    {
        "calc-icon href": "https://www.taxtim.com/za/calculators/small-business-income-tax",
        "image": "https://www.taxtim.com/za/images/calc-biz-tax.png",
        "title": "How to calculate the tax for a Small Business Corporation (SBC)",
        "label": "Income Tax"
      },
      {
        "calc-icon href": "https://www.taxtim.com/za/calculators/s12c-wear-and-tear",
        "image": "https://www.taxtim.com/za/images/calc-manufacturing-wear-and-tear.png",
        "title": "How to calculate the Section12C Depreciation/Wear and Tear allowance on plant and machinery used for manufacture",
        "label": "s12c Wear & Tear"
      },
      {
        "calc-icon href": "https://www.taxtim.com/za/calculators/sbc-wear-and-tear",
        "image": "https://www.taxtim.com/za/images/calc-biz-wear-and-tear.png",
        "title": "How to calculate the accelerated S12E Depreciation/Wear and Tear allowance on assets in a Small Business Corporation (SBC)",
        "label": "SBC Wear & Tear"
      },
      {
        "calc-icon href": "https://www.taxtim.com/za/tax-guides/definitions/wear-and-tear",
        "image": "https://www.taxtim.com/za/images/calc-sme-wear-and-tear.png",
        "title": "How to calculate the Section 11(e) Depreciation / Wear and Tear allowance on business assets",
        "label": "Wear & Tear"
      },
      {
        "calc-icon href": "https://www.taxtim.com/za/calculators/s11f-lease-premium-allowance",
        "image": "https://www.taxtim.com/za/images/calc-lease-premium.png",
        "title": "How to calculate the Section 11(f) tax deduction for a lease premium",
        "label": "s11(f) Lease Premium"
      },
      {
        "calc-icon href": "https://www.taxtim.com/za/calculators/s11g-leasehold-improvements",
        "image": "https://www.taxtim.com/za/images/calc-leasehold-improvements.png",
        "title": "How to calculate the Section 11(g) Leasehold Improvements allowance for renovation/improvements done to a building that the business leases",
        "label": "Leashold Improvements"
      },
      {
        "calc-icon href": "https://www.taxtim.com/za/calculators/payroll-tax",
        "image": "https://www.taxtim.com/za/images/calc-biz-tax.png",
        "title": "How to calculate the tax for employee payroll - UIF, PAYE, take home pay.",
        "label": "Payroll Tax"
      }
   ]
export default function GridCal({handlechange}) {
  return (
    <DIV>
      <div className='bb'>
{
    jsondata.map((el,index)=><Gridcalcard key={index} {...el} handlechange={handlechange}/>)
}
</div>
<br />
<h2>Calculators for Companies</h2>
<br />
<div className='bb'>
{
  compjsondata.map((el,index)=><Gridcaltwocard key={index} {...el} handlechange={handlechange}/>)
}
</div >

    </DIV>
  )
}
const DIV=styled.div`
width: 70%;
/* display: grid;
gap: 10px;
  grid-template-columns: repeat(3, 1fr);
 margin-right: 100px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media only screen and (max-width:420px) {
    grid-template-columns: repeat(1,1fr);

  } */
  .bb{
    display: grid;
gap: 10px;
  grid-template-columns: repeat(3, 1fr);
 margin-right: 100px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media only screen and (max-width:420px) {
    grid-template-columns: repeat(1,1fr);

  }
  }

`


