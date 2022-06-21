import React from "react";
import data from '../page3/data.json'

const Home5 = () => {

    const[word, setWord]= React.useState('')
    const [definition, setDefinition]= React.useState('')
    const wordSelect = data
    const definitionId = wordSelect.findIndex(definitionId => definitionId.word === word)
    const i = definitionId

    const handleChangeWord = (e) => {
        //e.preventDefault()
        setWord(e.target.value)
    }
    const handleClickWord = (e) => {
        //e.preventDefault()
        setDefinition(wordSelect[i]?.definition)
    }

    console.log(`au chargement du composant select value = ${word}`)

    return(
        <div>
            
            <label>Choisis un mot</label>
            <select value={word} onChange={handleChangeWord} onClick={handleClickWord}>
               {wordSelect.map((i)=><option value={i.word} key={i.id}>{i.word}</option>)}
            </select>
            <div>
               {definition}
            </div>
            
        </div>

    )
}

export default Home5;