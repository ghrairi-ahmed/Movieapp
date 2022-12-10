import React, { useState } from 'react'

const AddMovie = ({setShowModal, setMovies ,movies }) => {
  const [newMovie, setNewMovie] = useState()

  const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }
  return (
    <div className='Oppa'>
      <h1 onClick={()=>setShowModal(false)} id='ferme'>Close</h1>
        <h1>Modal</h1>
        <div className='Carr'>
       <input onChange={(e)=>handleChange(e)} type="text" name='title' placeholder='Movie Title' />
       <input onChange={(e)=>handleChange(e)} type="text" name='description'  placeholder='Movie description'/>
       <input onChange={(e)=>handleChange(e)} type="text" name='img' placeholder='Movie image' />
       <button onClick={()=>{setMovies([...movies,newMovie]);setShowModal(false)}}>Add</button>
       </div>
    </div>
  )
}

export default AddMovie