import React from 'react';

import Gif from './Gif'

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map((gif,i) => <Gif key={i} id={gif}/>)}
    </div>
  );
}

export default GifList;
