import { useState } from "react";
import "./App.css";
import MovieList from "./views/MovieList";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Series from "./views/Series";
import MovieDetails from "./views/MovieDetails";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <title>Movie App</title>
      <Navbar setText={setText} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieList text={text}/>}/>
        <Route path="/series" element={<Series text={text}/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
