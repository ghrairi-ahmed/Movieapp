import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ setText }) => {
  return (
    <nav className='NavbarItems'>
      <img className='Logomov' src='../Images/Logo.png' alt='fam shy'></img>

      <ul>
        <div className='Ohwn'>
          <Link to={"/"}><img className='Image1' src='../Images/Home.png.png' alt='kjhk'></img><h3 style={{ color: "#000202" }}>Home</h3></Link>
          <Link to={"/movies"}><img className='Image2' src='../Images/Movies.png.png' alt='jhhk'></img><h3 style={{ color: "#000202" }}>Movies</h3></Link>
          <Link to={"/series"}><img className='Image3' src='../Images/Series.png.png' alt='azeadad'></img><h3 style={{ color: "#000202" }}>Series</h3></Link>


          <input type="text"
            onChange={(e) => setText(e.target.value)}
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