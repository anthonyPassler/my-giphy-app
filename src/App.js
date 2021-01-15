import './App.scss';
import SearchBar from './components/SearchBar'
import Gif from './components/Gif'
import GifList from './components/GifList'
import React, { useState } from 'react'
import giphy from 'giphy-api'

function App() {
  const [gifs, setGifs] = useState([]);
  const [selectedGifId, setSelectedGifID] = useState("13VJu6tRPDBF72");

  const search = (query) => {
    giphy(process.env.REACT_APP_GIPHY_API_KEY).search({
    q:  query,
        rating: 'g',
        limit: 10,
    }, function (err, res) {
        setGifs(res.data);
    });
  };

  return (
    <div>
      <div className="left-scene ">
        <SearchBar search={search}/>
        <div className="selected-gif">
          <Gif id={selectedGifId}/>
        </div>
      </div>
      <div className="right-scene ">
        <GifList gifs={gifs}/>
      </div>
    </div>
  );
}

export default App;
