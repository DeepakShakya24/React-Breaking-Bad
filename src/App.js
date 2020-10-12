import React,{useState,useEffect} from 'react';
import './App.css';
import axios from "axios"
import Header from './components/UI/Header';
import CharactersGrid from "./components/Characters/CharacterGrid"
import Search from './components/UI/Search';

const App=()=>{
  const [items,setItems]=useState([])
  const [isLoading,setisLoading]=useState(true)
  const[query,setQuery]=useState("")
  useEffect(()=>{
    const FetchItems=async()=>{
      const characters=await axios.get(`https://www.breakingbadapi.com/api/characters?limit=35&offset=0&&name=${query}`)
      console.log(characters.data)
      setItems(characters.data)
      setisLoading(false)
    }
    FetchItems()
  },[query])
  return(
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharactersGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App