import './App.scss';
import SearchBar from './components/SearchBar'
import Gif from './components/Gif'

function App() {
  return (
    <div>
      <div className="left-scene ">
        <SearchBar />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene ">

      </div>
    </div>
  );
}

export default App;
