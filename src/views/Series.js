import React, { useState } from 'react'
import Card from '../components/Card'
import{cardslist} from "../hey"
import "../styles/card.css"


const Series = ({text}) => {
    const[movies,setmovies] = useState(cardslist)

  return (
    <div className='card-container'>
         {movies.filter(el=>el.category==="serie").filter(el=>el.title.toUpperCase().includes(text.toUpperCase())).map(
            (el) =>(<Card movie={el}/>))}           
    </div>
  )
}

export default Series