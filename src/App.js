import React, { useState } from "react";
import "./App.css";
import data from "./data";
import MovieList from "./Component/MovieList";
import Add from "./Component/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import  Filtre  from "./Component/Filtre";

function App() {
  const [movies, setMovies] = useState(data)
  const handelAdd = (newf) => {
    setMovies([...movies, { ...newf, _id: movies.length }]);
  };
  const [searchtitle, setSearchtitle] = useState("");
  const [searchrating, setSearchrating] = useState("");
  const filtreName = (searchtitle) => {
    setSearchtitle(searchtitle);
  };
  const filtreRating = (searchrating) => {
    setSearchrating(searchrating);
  };
  return (
    <div className="App">
      <Add handelAdd={handelAdd} />
      <Filtre filtreName={filtreName} filtreRating={filtreRating} />
      <MovieList
        data={movies.filter(
          (el) =>
            el.Title.toLowerCase().includes(searchtitle.trim().toLowerCase()) &&
            el.Rating >= searchrating
        )}
      />
    </div>
  );
}

export default App;
