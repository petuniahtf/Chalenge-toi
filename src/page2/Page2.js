import React from "react";
import Contact from "./footer/Contact";
import Homme from "./header/Home";
import { Button } from "@mui/material";

const Page2 = () =>{

    return (
        <>
        <Button variant="contained" href="/">Home</Button>
        <Homme/>
        <Contact/>
        </>
    )
}

export default Page2;