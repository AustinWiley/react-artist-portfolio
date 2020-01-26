import React, { Component } from "react";
import Slide from "../Slide/Slide";
import Images from "../../paintings.json";
import Chimes from "../../chimes.json";

class PaintingSlide extends Component {
  // Setting our component's initial state
  state = {
    slideIndex: 0,
    images: Images,
    hide: {
      display: "none"
    },
    show: {
      display: "block"
    },
    page: this.props.name
  };

  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   console.log("component did mounat")
  //   this.setState({ slideIndeximages: Images})
  // }

nextSlide = event => {
  console.log("Next stlide")
  console.log(this.state.slideIndex);
  console.log(this.state.slideIndex)
    var slideCount = this.state.slideIndex + 1;
    console.log(slideCount)
    if (slideCount >= this.state.images.length ) {this.setState({ slideIndex: 0})}
    else if (slideCount <= this.state.images.length -1 ) {this.setState({ slideIndex: slideCount})};
  };

  prevSlide = event => {
    console.log("prev slide")
    console.log(this.state.slideIndex);
    var slideCount = this.state.slideIndex - 1;
    if (slideCount < 0) {
      this.setState({ slideIndex: this.state.images.length -1})
    }
    else if (slideCount <= this.state.images.length) {
      this.setState({ slideIndex: slideCount})
    };
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
      <>
        <div className="slideshow-container">
          <div className="inner">
            {this.state.images.map(image => {
                return <Slide image={image.image} key={image.id} caption={image.image} style={(this.state.slideIndex == image.id) ? this.state.show: this.state.hide } />
            })}
          </div>

          <a className="prev" onClick={this.prevSlide}>&#10094;</a>
          <a className="next" onClick={this.nextSlide}>&#10095;</a>
        </div>
        <br />
            <h1>{this.state.page}</h1>
            {/* <div style="text-align:center">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span classNamer="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div> */}
        </>
      );
    }
  }
export default PaintingSlide;