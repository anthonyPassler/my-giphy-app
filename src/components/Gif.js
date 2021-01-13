import React from 'react';

const Gif = (props) => {
  const url = `https://media1.giphy.com/media/${props.id}/giphy.gif`
  return (
    <img className="gif" src={url} alt=""/>
  );
}

export default Gif;
