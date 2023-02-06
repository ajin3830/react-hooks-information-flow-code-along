import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  // for deliverable 2
  const [childColor, setChildColor] = useState("#FFF");

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    // for deliverable 2
    // option 1
    const newChildColor = getRandomColor();
    // option 2: pass newChildColor directely to handleChangeColor as an arg
    // so you don't have to const it => 
    // function handleChangeColor(newChildColor) {}
    setChildColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child handleChangeColor={handleChangeColor} childColor={childColor}/>
      <Child handleChangeColor={handleChangeColor} childColor={childColor}/>
    </div>
  );
}

export default Parent;

// Deliverable 1- change parent color when clicked on either child
// when clicked on div inside child, parent changes color
// child uses handleChangeColor variable to determine what function to run
// handleChangeColor is a prop passed from parent to child
// handleChangeColor needs to reference colorchange function inside the parent
// we need to make one in parent since we don't have one
// now make childChangeParentColor function to change parent color state
// to pass this state changing function to child,
// we name the prop handleChangeColor and have it reference childChangeParentColor
// now we can use this handleChangeColor prop as an event handler inside child component

// Deliverable 2- when clicked on child, both child background should change