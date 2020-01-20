import React, {Component} from 'react'

class Slideshow extends Component {
  constructor() {
    super()
    this.state = {
      pigeons: ["Austin", "Sarah", "Emmry", "Haven"]
    }
  }
  render() {
    return (
        <React.Fragment>
        <p>This is the slide show</p>
        <ul>
          {this.state.pigeons.map(userName => {
            return <li>{userName}</li>
          })}
        </ul>
        </React.Fragment>
    )
  }
}

export default Slideshow;