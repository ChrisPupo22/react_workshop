import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

import "./App.css";

class App extends Component {
  state = {
    username: "superchris",
  };

  //event handler
  nameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangeHandler} currentName={this.state.username} />
        <UserOutput
          userName={this.state.username}
        />
        <UserOutput
          userName={this.state.username}
        />
        <UserOutput userName="Jane" />
      </div>
    );
  }
}

export default App;
