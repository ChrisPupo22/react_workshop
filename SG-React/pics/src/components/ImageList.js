import React from "react";

const ImageList = (props) => {
  const images = props.imageResults.map((image) => {
    return (
      <img
        style={{ height: "25%", width: "25%" }}
        key={image.id}
        src={image.urls.regular}
        alt="alt_description"
      />
    );
  });
  console.log(images);

  return <ul>{images}</ul>;
};

export default ImageList;
