import React, { Component } from "react";
import "./App.css";
import Validation from './components/Validation'; 
import CharOutput from './components/CharOutput'; 

class App extends Component {
  state = {
    input: ''
  }

  letterChangeHandler = (event) => {
    this.setState({input : event.target.value}); 
  };

  getLetter = () => {
    return this.state.input.map(l => {
      const letter = l
    })
  }

  getLength = () => {
    // return this.state.input.length; 
    console.log(this.state.input.length)
  }

  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="userInput"
          onChange={this.letterChangeHandler}
          value={this.state.input}
        />
        <p>{this.state.input}</p>
        <Validation length={this.state.input.length}/>
        <CharOutput text={this.state.input}/>
      </div>
    );
  }
}

export default App;
