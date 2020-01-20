import React, { Component } from "react";
import Slide from "../Slide/Slide"
import Images from "../../paintings.json"

class Slideshow extends Component {
  // Setting our component's initial state
  state = {
    slideIndex: 0,
    pigeons: ["Austin", "Sarah", "Emmry", "Haven"],
    images: Images,
    hide: {
      display: "none"
    },
    show: {
      display: "block"
    },
  };

  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.setState({ slideIndex: 0})
  // }

nextSlide = event => {
  console.log("Next stlide")
  console.log(this.state.slideIndex)
    var slideCount = this.state.slideCount + 1;
    console.log(slideCount)
    if (slideCount > this.state.images.length) {this.setState({ slideIndex: 0})};
    if (slideCount <= this.state.images.length) {this.setState({ slideIndex: slideCount})};
  };

  prevSlide = event => {
    console.log("prev slide")
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
        <>
            <div className="slideshow-container">
              {console.log("rersnder!!!!!!!!!!!!")}

                {this.state.images.map(image => {
                  console.log(this.state.images)
                    return <Slide image={image.image} key={image.id} caption={image.image} style={(this.state.slideIndex == image.id) ? this.state.show: this.state.hide } />
                })}

<p>Look at all the pigeons spotted today!</p>
        <ul>
          {this.state.pigeons.map(userName => {
            return <li>{userName}</li>
          })}
        </ul>

                <a className="prev" onClick={this.prevSlide}>&#10094;</a>
                <a className="next" onClick={this.nextSlide}>&#10095;</a>
            </div>
            <br />


            {/* <div style="text-align:center">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span classNamer="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div> */}
        </>
      );
    }
  }
export default Slideshow;