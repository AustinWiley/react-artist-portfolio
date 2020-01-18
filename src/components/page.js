import React from "react";

// This component lets us use a bootstrap input element without worrying about className names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Form(props) {
  return (
    <div className="container">
        <h1>Goodbye, {props.name}</h1>
    </div>
  );
}

export default Form;