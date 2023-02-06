import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ handleChangeColor, childColor }) {
  // console.log(handleChangeColor)
  function handleClick() {
    const newColor = getRandomColor();
    handleChangeColor(newColor)
  }
  
  return (
    <div className="child" 
      style={{ backgroundColor: childColor }} 
      onClick={handleClick}
    />
  );
}

export default Child;

// // This is deliverable 1 without deliverable 2
// function Child({ handleChangeColor }) {
//   // console.log(handleChangeColor)
  
//   return (
//   <div className="child" 
//   style={{ backgroundColor: "#FFF" }} 
//   onClick={handleChangeColor}
//   />
//   );
// }