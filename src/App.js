import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovies = (movieObj) => {
    setMovies(...movies, movieObj);
  };
  return (
    <div className="App">
      <h2 className="d-flex justify-content-center mt-5">Movie List</h2>
      <SearchForm />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
