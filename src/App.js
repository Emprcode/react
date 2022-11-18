import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <h2 className="d-flex justify-content-center mt-5">Movie List</h2>
      <SearchForm />
    </div>
  );
}

export default App;
