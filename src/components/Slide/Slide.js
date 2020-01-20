import React from "react";

// This component lets us use a bootstrap input element without worrying about className names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Slide(props) {
  return (
<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src={props.image} style="width:100%" />
<div className="text">{props.caption}</div>
</div>

  );
}

export default Slide;