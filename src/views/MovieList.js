import React, { useState } from 'react'
import AddMovie from "../components/AddMovie";
import Card from '../components/Card';
import{cardslist} from "../hey"
import "../styles/card.css"

const MovieList = ({text}) => {
    const[showModal,setShowModal]= useState(false)
    const[movies,setmovies] = useState(cardslist)
    
  return (
    <div className='card-container'>
        {movies.filter(el=>el.category==="movie").filter(el=>el.title.toUpperCase().includes(text.toUpperCase())).map(
            (el) =>(<Card movie={el}/>))}
            <button className='YAYA' onClick={()=>setShowModal(true)}>Add Movie</button>
            {showModal && <AddMovie movies={movies} setMovies={setmovies}  setShowModal={setShowModal}/>  }
           
    </div>
    
  )
}


export default MovieList