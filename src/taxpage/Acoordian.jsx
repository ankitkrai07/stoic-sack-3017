import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { styled } from "styled-components";
const DIV=styled.div`
display: flex;
  justify-content: space-between;
  align-items: center; /* Add this line to vertically center align items */
  text-align: end;
  padding: 10px; /* Adjust padding as needed */
  /* Add margin to control spacing between DIVs */
`;
const InputLabel = styled.label`

  margin-bottom: 5px;
  margin-right: 10px;
`;

const InputField = styled.input`
  padding: 5px;
  font-size: 14px;
`;
export default function Acoordian({setpf,pf,settravel,travelAllowance}) {
  return (
    <Accordion allowToggle width="70%" mb="20px">
      <AccordionItem>
       
          <AccordionButton bg="#6a6767" border="none">
            <Box as="h1" textAlign="left" color="whitesmoke">
              PENSION | RAF | Open PROVIDENT FUND | TRAVEL ALLOWANCE
            </Box>
          </AccordionButton>
        

        <AccordionPanel  bg=" #eae7e7">
        <DIV>
     
     <InputLabel>
Salary include contributions to a pension, provident fund or RAF
       </InputLabel>
       <InputField type="number" value={pf} onChange={(e)=>setpf(e.target.value)}/>
     
    </DIV>
    <DIV>
     
     <InputLabel>
 your salary include money for a travel allowance?
       </InputLabel>
       <InputField type="number" value={travelAllowance} onChange={(e)=>settravel(e.target.value)} />
     
    </DIV>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
