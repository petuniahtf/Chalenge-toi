import React from "react";
import data from '../data.json'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Home3 = () => {
  const [motSelected, setMotSelected] = React.useState('')
  const [definitionAfficher, setDefinitionAfficher] = React.useState('')
  const wordSelected = data;
  const definitionId = wordSelected.findIndex(definitionId => definitionId.word === motSelected)
  const i = definitionId
  console.log(`le mot qui a un def est à l'index ${definitionId}`)

  const handleChange = (e) => {
    e.preventDefault()
    setMotSelected(e.target.value)
    setDefinitionAfficher(wordSelected[i]?.definition)
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
          {wordSelected.map((i) =>
            <MenuItem key={i.id} value={i.word}>{i.word} {i.definition}</MenuItem>
          )}
        </Select>
        <p>{motSelected} !il est a comme un décalage ! {definitionAfficher}</p>
      </FormControl>
      
    </div>
  )
}

export default Home3;