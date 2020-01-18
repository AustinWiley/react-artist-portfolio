import React, {Component} from 'react'

class Users extends Component {
  constructor() {
    super()
    this.state = {
      pigeons: ["Austin", "Sarah", "Emmry", "Haven"]
    }
  }
  render() {
    return (
        <React.Fragment>
        <p>Look at all the pigeons spotted today!</p>
        <ul>
          {this.state.pigeons.map(userName => {
            return <li>{userName}</li>
          })}
        </ul>
        </React.Fragment>
    )
  }
}

export default Users;