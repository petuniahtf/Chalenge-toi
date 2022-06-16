import React from "react";
import './page3.css'
import { Button } from "@mui/material";
import Home3 from "./home/home";
import Footer3 from "./footer/footer";
import Definition from "./contenu/definition";
//import data from "./data.json"

const Page3 = ()=>{
    const [wordDefinition, setWordDefinition] = React.useState()

   const handleWordSelectedChange =(motSelected)=>{
    console.log(`${motSelected} est le mot sélectionnner`)
    setWordDefinition(motSelected)
   }
    return (
        <>
        <Button variant="contained" href="/">Home</Button>
        <Home3  onWordSelectedChange={handleWordSelectedChange}/>
        <Definition wordDefinition={wordDefinition}/>
        <Footer3/>
        </>
    )
}

export default Page3;