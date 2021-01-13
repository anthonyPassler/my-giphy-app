import './App.scss';
import SearchBar from './components/SearchBar'
import Gif from './components/Gif'
import GifList from './components/GifList'

function App() {
  const gifs = [
    "13VJu6tRPDBF72",
    "a93jwI0wkWTQs",
    "xT5LMHxhOfscxPfIfm"
  ];
  return (
    <div>
      <div className="left-scene ">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="13VJu6tRPDBF72"/>
        </div>
      </div>
      <div className="right-scene ">
        <GifList gifs={gifs}/>
      </div>
    </div>
  );
}

export default App;
