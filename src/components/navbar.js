import React from 'react'

const Navbar = ({setText}) => {
  return (
   <nav className='NavbarItems'>
    <img className='Logomov' src='../Images/Logo.png'alt='fam shy'></img>
    
    <ul>
    <div className='Ohwn'>
        <a href='index.html'><img className='Image1'  src='../Images/Home.png.png'></img><h3 style={{color: "#000202"}}>Home</h3></a>
        <a href='index.html'><img className='Image2' src='../Images/Movies.png.png'></img><h3 style={{color: "#000202"}}>Movies</h3></a>
        <a href='index.html'><img className='Image3' src='../Images/Series.png.png'></img><h3 style={{color: "#000202"}}>Series</h3></a>

        
        <input type="text"
        onChange={(e)=>setText(e.target.value)}
    placeholder="Rechercher" >
</input>

        </div>
    </ul>
    <br></br>
    <hr></hr>
    
   </nav> 
  )
}


export default Navbar