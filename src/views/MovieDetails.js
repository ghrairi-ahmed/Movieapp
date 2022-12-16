import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


const MovieDetails = () => {
    const location=useLocation()
    const movie=location.state
  return (
    <div>
        
        <h1>{movie.title}</h1>
        <img alt='' src={movie.img}/>
        <p>{movie.description}</p>
        <video>
          <source src='{movie.trailer}' type='video/mp4'/>
        </video>
    </div>
  )
}

export default MovieDetails