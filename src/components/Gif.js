import React from 'react';

const Gif = (props) => {
  const url = `https://media1.giphy.com/media/${props.id}/giphy.gif`
  const handleClick = (event) => {
    props.selectedGif((props.id));
  }
  return (
    <img
      className="gif"
      src={url}
      alt=""
      onClick={handleClick}
    />
  );
}

export default Gif;



