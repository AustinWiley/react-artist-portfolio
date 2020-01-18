import React from "react";

// This component lets us use a bootstrap input element without worrying about className names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Form(props) {
  return (

        <h1>Welcome, {props.name}</h1>

  );
}

export default Form;