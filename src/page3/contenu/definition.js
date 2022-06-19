import React from "react";
import Data from '../data.json'


const Definition =({wordDefinition})=>{
    

    const definitionWord = Data

    console.log(`le composant Contenu a le props ${wordDefinition}`)
    console.log(`le composant Contenu est ${definitionWord[2].definition}`)




    return(
        <div>
            {wordDefinition === definitionWord.word ? 
            
        <p>{definitionWord.definition}</p>
        : <p>je n'ai pas trouver la définition </p> }

        <p>{wordDefinition}</p>

        </div>
    )
}

export default Definition;