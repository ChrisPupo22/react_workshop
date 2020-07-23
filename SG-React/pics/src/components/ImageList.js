import React from "react";
import './ImageList.css'; 

const ImageList = (props) => {
  const images = props.imageResults.map((image) => {
    return (
      <img
        key={image.id}
        src={image.urls.regular}
        alt="alt_description"
      />
    );
  });
  console.log(images);

  return <div className='image-list'>{images}</div>;
};

export default ImageList;
