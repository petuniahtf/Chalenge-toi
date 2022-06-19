import React from "react";
import data from '../data.json'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Home3 = ({onWordSelectedChange}) => {
  const [motSelected, setMotSelected] = React.useState('')
  //const [definition, setdefinition] = React.useState('')
  const wordSelected = data;

  console.log(`les donner sont ok ? ${wordSelected}`)

//   React.useEffect(()=>{
//     fetch(`http://localhost:3000/data/${motSelected}`) 
//     .then(response =>{
//         console.log(response)
//        return response.json()
//     })
//     .then(json =>{
//       console.log(`le json ca dit quoi ${json}`)
//         setdefinition(json[0].definition)
//     })
//     .catch(error =>{
//         console.log(error)
//     })
// },[motSelected] )

  const handleChange = (e) =>{
    //e.preventDefault()
    setMotSelected(e.target.value)
    console.log(`le mot du handleChange ${motSelected}`)
    onWordSelectedChange(motSelected)
  } 

  return (
    <div>
    <FormControl fullWidth>
      <InputLabel  id="demo-simple-select-label">Votre mot</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={motSelected}
        label="Age"
        onChange={handleChange}
      >
         {wordSelected.map((i)=><MenuItem key={i.id} value={i.word}>{i.word}</MenuItem>
         
         )}
      </Select>
      {wordSelected.map((i)=><p key={i.id}>{i.definition}</p>)}
    </FormControl> 
    
    </div>
  )
}

export default Home3;