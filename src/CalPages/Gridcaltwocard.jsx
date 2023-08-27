import React, { useState } from 'react';
import styled from 'styled-components';

const GridCalCardContainer = styled.div`
  /* width: 70%; */
/* margin: auto ; */
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  /* margin-right: 100px; */
  div p{
    position: absolute;
    top: 60%;
    left: 30%;
    color: white;
    font-weight:bolder;
 
    /* text-align: center; */
  }
`;

const GridCell = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  /* padding: 10px; */
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  background-color: #eadb59;
`;

const ImageTextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* padding: 20px; */
  background-color: rgba(234, 219, 89, 1);

  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: smaller;
  text-align: center;
  margin: auto;
  color: white;

  ${GridCell}:hover & {
    opacity: 1;
  }
 
`;

export default function Gridcaltwocard({ image, title, label ,handlechange}) {
  const [isHovered, setIsHovered] = useState(false);
const handleclick=()=>{
handlechange("company-tax")
}
  return (
    <GridCalCardContainer onClick={handleclick}>
        
      <GridCell
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <p>{label}</p>
          <Image src={image} alt={title} />
        </div>
       
        <ImageTextOverlay> {isHovered ? title : ''}</ImageTextOverlay>
      </GridCell>
    </GridCalCardContainer>
  );
}
