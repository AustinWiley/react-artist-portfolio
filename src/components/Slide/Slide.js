import React from "react";

//this cpmponent created a slide for each image
function Slide(props) {
  return (
    <>
      <div className="mySlides fade" style={props.style}>
        <div className="numbertext">{props.slideNumber}</div>
        <img src={props.image} style={{width:"100%"}} />
        <div className="text">{props.caption}</div>
      </div>
      <div>{props.caption}</div>
    </>
  );
}

export default Slide;