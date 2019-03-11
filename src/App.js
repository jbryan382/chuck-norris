import React, { Component } from 'react'
import Axios from 'axios'
import Joke from './components/Joke'

class App extends Component {
  state = {
    joke: '',
    id: ''
  }

  componentDidMount() {
    Axios.get(`https://api.chucknorris.io/jokes/random`).then(resp => {
      console.log({ resp })
      this.setState({
        joke: resp.data.value,
        id: resp.data.id
      })
    })
  }

  getNewJoke = () => {
    Axios.get(`https://api.chucknorris.io/jokes/random`).then(resp => {
      console.log({ resp })
      this.setState({
        joke: resp.data.value,
        id: resp.data.id
      })
    })
  }

  render() {
    return (
      <>
        <section>
          <h1>Get Your Random Chuck Norris Jokes Here:</h1>
          <img src="https://farm5.staticflickr.com/4429/36340185705_dbb54440ae.jpg" />
          <Joke joke={this.state.joke} />
          <button onClick={this.getNewJoke}>Get New Joke Here</button>
        </section>
      </>
    )
  }
}

export default App
