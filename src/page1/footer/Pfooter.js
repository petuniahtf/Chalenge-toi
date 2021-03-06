import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const Pfooter =()=>{
    const marks = [
        {
          value: 0,
          label: '0°C',
        },
        {
          value: 20,
          label: '20°C',
        },
        {
          value: 37,
          label: '37°C',
        },
        {
          value: 100,
          label: '100°C',
        },
      ];

      
function valuetext(value) {
    return `${value}°C`;
  }

    return(
        <>
        <p>Un composant pour la température</p>

        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
      </Box>
        </>
        
    )
}
export default Pfooter;




