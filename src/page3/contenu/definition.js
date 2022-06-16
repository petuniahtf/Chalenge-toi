import React from "react";
//import Data from '../data.json'


const Definition =({wordDefinition})=>{

    //const definitionWord = Data

    console.log(`le composant Contenu a le props ${wordDefinition}`)

    return(
        <div>
            <p>{wordDefinition}</p>


        </div>
    )
}

export default Definition;