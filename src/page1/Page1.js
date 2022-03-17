import React from "react";
import Conteneur from "./contenu/Conteneur";
import Pfooter from "./footer/Pfooter";
import Connection from "./header/Connection";
import SearchAppBar from "./header/NavBarre";

//https://olympics.com/fr/beijing-2022/sports/patinage-artistique/

const Page1 = ()=>{

    return (
        <>
        <SearchAppBar/>
        <Connection/>
        <Conteneur/>
        <Pfooter/>
        </>
        
    )
}

export default Page1;