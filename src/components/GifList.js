import React from 'react';

import Gif from './Gif'

const GifList = (props) => {

  const selectedGif = (id) => {
    props.selectedGif(id);
  };

  return (
    <div className="gif-list">
      {props.gifs.map((gif,i) => <Gif selectedGif={selectedGif} key={i} id={gif.id}/>)}
    </div>
  );
}

export default GifList;
