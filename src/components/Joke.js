import React, { Component } from 'react'

class Joke extends Component {
  render() {
    return (
      <>
        <h3>{this.props.joke}</h3>
      </>
    )
  }
}

export default Joke
