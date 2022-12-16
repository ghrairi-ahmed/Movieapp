import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/card.css"
const Card = ({ movie }) => {
    return (
        <div className='card'>
            <Link to={`/movie/${movie.id}`} state={movie}><img src={movie.img} alt="qdsqdsq"></img></Link>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
        </div>
    )
}

export default Card