import React from "react";

const UserInput = (props) => {
  return (
    <div className="input_container">
      <input
        type="text"
        className="userInput"
        onChange={props.changed}
        value={props.currentName}
      ></input>
    </div>
  );
};

export default UserInput;
