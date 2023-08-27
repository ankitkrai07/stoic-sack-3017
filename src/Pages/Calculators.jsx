import React, { useState } from "react";
import Topsection from "../CalPages/Topsection";
import Calculationsection from "../CalPages/Calculationsection";
import GridCal from "../CalPages/GridCal";
import Sidecheck from "../CalPages/Sidecheck";
import Salarytax from "../taxpage/Salarytax";
import Companytax from "../taxpage/Companytax";
import { ChakraProvider } from "@chakra-ui/react";

export default function Calculators() {
  const [salary, setsalary] = useState(false);
  const handlechange = (payload) => {
    setsalary(payload);
  };
  return (
    <div>
      <div>
       
       
       <Topsection />
      </div>
      { salary === "salary-tax"?"":salary === "company-tax" ?"":  <Calculationsection />}
     
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        {salary === "salary-tax" ? (
          <Salarytax />
        ) : salary === "company-tax" ? (
          <Companytax />
        ) : (
          <GridCal handlechange={handlechange} />
        )}

        <Sidecheck />
      </div>
    </div>
  );
}
