import React, { useState } from 'react'
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import{cardslist} from "../hey"

const MovieList = ({text}) => {
    const[showModal,setShowModal]= useState(false)
    const[movies,setmovies] = useState(cardslist)
    
  return (
    <div className='Waa'>
        {movies.filter(el=>el.title.toUpperCase().includes(text.toUpperCase())).map(
            (el) =>(<MovieCard a={el}/>))}
            <button className='YAYA' onClick={()=>setShowModal(true)}>Add Movie</button>
            {showModal && <AddMovie movies={movies} setMovies={setmovies}  setShowModal={setShowModal}/>  }
           
    </div>
    
  )
}


export default MovieList