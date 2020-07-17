import React from "react";

const UserOutput = (props) => {
  return (
    <div className="output_container">
      <p className="firstP">UserName: {props.userName}</p>
      <p className="secondP">to be overwritten</p>
    </div>
  );
};

export default UserOutput;
