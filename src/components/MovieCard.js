import React from 'react'
import AddMovie from './AddMovie'


const MovieCard = (props) => {
  return (
    <div className='MovieCard'>
    <img src={props.a.img}></img>
    <h3>{props.a.title}</h3>
    <p>{props.a.description}</p>
    </div>
  )
}

export default MovieCard