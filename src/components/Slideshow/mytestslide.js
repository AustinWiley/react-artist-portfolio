import React, { Component } from "react";
import Slide from "../Slide/Slide"

class Slideshow extends Component {

    state = {
      sideIndex: 1,
      images: ["Austin", "Sarah", "Emmry", "Haven"]
    }

    // var slideIndex = 1;
// showSlides(slideIndex);
// componentDidMount() {
//   showslides()
// }

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


render() {
    return (
        <>
        <div className="slideshow-container">

        
        {state.pigeons.map(userName => {
                    return <Slide caption={userName} />
        })}

        
        <a className="prev" onclick={plusSlides(-1)}>&#10094;</a>
        <a class="next" onclick={plusSlides(1)}>&#10095;</a>
        </div>
        <br />


        <div style="text-align:center">
        <span className="dot" onclick="currentSlide(1)"></span>
        <span classNamer="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
        </div>
        </>
      );
    }
};

export default Slideshow;