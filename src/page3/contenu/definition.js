import React from "react";
import Data from '../data.json'


const Definition =({wordDefinition})=>{
    const [testDef, setTestDef] = React.useState()

    const definitionWord = Data
    console.log(`le mot venue d'ailleurs ${wordDefinition}`)
    
React.useEffect(()=>{
    const getDefinition = (wordDefinition) => {
        const definitionId = definitionWord.findIndex(definitionId => definitionId.word === wordDefinition)
        return definitionWord[definitionId].definition     
    }

    setTestDef(getDefinition(wordDefinition))

}, [testDef, definitionWord, wordDefinition])

    return(
        <div>
            
        <p>{testDef}</p>   
        
        <p>je n'ai pas trouver la définition </p> 

        <p>{wordDefinition} </p>

        </div>
    )
}

export default Definition;