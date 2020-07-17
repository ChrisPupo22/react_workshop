import React from "react";

const Validation = (props) => {
  return props.length > 5 ? <p>Text long enough</p> : <p>Text is too short</p>;
};

export default Validation;
