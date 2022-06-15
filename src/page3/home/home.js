import React from "react";
import data from '../data.json'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Home3 = () => {
  const [motSelected, setMotSelected] = React.useState('')
  const wordSelected = data;

  console.log(`les donner sont ok ? ${wordSelected}`)

  const handleChange = (e) =>{
    setMotSelected(e.target.value)
  } 

  return (
    <div>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Votre mot</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={motSelected}
        label="Age"
        onChange={handleChange}
      >
         {wordSelected.map((i)=><MenuItem key={i.id} value={i.word}>{i.word}</MenuItem>)}
      </Select>
      
    </FormControl> 
    
    </div>
  )
}

export default Home3;