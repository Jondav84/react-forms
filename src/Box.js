/** @format */

import React from "react";

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
    display: `inline-block`,
    margin: `10px`,
    position: `relative`,
  };

  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Box;
