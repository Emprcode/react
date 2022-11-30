import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from "./components/SearchForm";
import { MovieCard } from "./components/MovieCard";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <h2 className="d-flex justify-content-center mt-5">Movie List</h2>
      <SearchForm />
      <MovieList />
    </div>
  );
}

export default App;
