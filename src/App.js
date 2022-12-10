

import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/navbar';
import { cardslist } from './hey';



function App() {

  const [text, setText] = useState("")
  return (
    <div className="App">
    <title>Movie App</title>
  <Navbar setText={setText}/>
<MovieList  text={text}/>
 
    </div>
  );
}

export default App;
