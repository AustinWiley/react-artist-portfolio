import React, { Component } from "react";
import Slide from "../Slide/Slide"

class Brewing extends Component {
  // Setting our component's initial state
  state = {
    slideIndex: 0,
    images: ["Austin", "Sarah", "Emmry", "Haven"],
    style: {
      display: "none"
    }
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.setState({ slideIndex: 0})
  }

nextSlide = event => {
    var slideCount = this.state.slideCount + 1;
    if (slideCount > this.state.images.length) {this.setState({ slideIndex: 0})};
    if (slideCount <= this.state.images.length) {this.setState({ slideIndex: slideCount})};
  };

  prevSlide = event => {
    var slideCount = this.state.slideCount - 1;
    if (slideCount < 0) {this.setState({ slideIndex: this.state.images.length})};
    if (slideCount <= this.state.images.length) {this.setState({ slideIndex: slideCount})};
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
        <Slide>
            <div className="slideshow-container">

                {this.state.images.map(userName => {
                    return <Slide caption={userName} style={this.state.style} />
                })}

                {/* <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
                <a class="next" onclick={plusSlides(1)}>&#10095;</a> */}
            </div>
            <br />


            <div style="text-align:center">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span classNamer="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div>
        </Slide>
      );
    }
  }
export default Brewing;


	
// import React from 'react';
// import Slide from "../Slide/Slide"

// function Slideshow() {

//     const state = {
//       sideIndex: 1,
//       pigeons: ["Austin", "Sarah", "Emmry", "Haven"]
//     }

//     // var slideIndex = 1;
// // showSlides(slideIndex);
// componentDidMount() {
//   showslides()
// }

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



//     return (
//       <>
// <div className="slideshow-container">

  
//   {state.pigeons.map(userName => {
//             return <Slide caption={userName} />
//   })}

  
//   <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
//   <a class="next" onclick={plusSlides(1)}>&#10095;</a>
// </div>
// <br />


// <div style="text-align:center">
//   <span className="dot" onclick="currentSlide(1)"></span>
//   <span classNamer="dot" onclick="currentSlide(2)"></span>
//   <span className="dot" onclick="currentSlide(3)"></span>
// </div>
// </>
//     )

// }

// export default Slideshow;