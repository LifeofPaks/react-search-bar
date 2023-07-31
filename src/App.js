import SearchBar from "./Components/SearchBar";
import bookData from '../src/Data/data.json'

import './App.css'
function App() {


  return (
    <div className="App">
      <SearchBar placeholder='Enter a book name' data={bookData} />
    </div>
  );
}

export default App;
