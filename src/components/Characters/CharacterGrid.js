import React from 'react'
import CharacterItem from "./CharacterItem"
import spinner from "../../img/spinner.gif"

const CharacterGrid = ({items,isLoading}) => {
return isLoading ? <header className="center">
<img src={spinner} alt=""/>
</header> : <section className="cards">{items.map((item)=>(
<CharacterItem key={item.char_id} item={item}></CharacterItem>
))}</section>
}

export default CharacterGrid
