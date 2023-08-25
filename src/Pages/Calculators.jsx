import React from 'react'
import Topsection from '../CalPages/Topsection'
import Calculationsection from '../CalPages/Calculationsection'
import GridCal from '../CalPages/GridCal'
import Sidecheck from '../CalPages/Sidecheck'

export default function Calculators() {
  return (
    <div >
        <div > <Topsection/></div>
       
        <Calculationsection/>
        <div style={{display:"flex",width:"80%",margin:"auto"}}> 
            <GridCal/>
            <Sidecheck/>
        </div>
    </div>
  )
}
