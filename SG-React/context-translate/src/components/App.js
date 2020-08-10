import React, { Component } from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  state = { color: "red" };


  onColorChange = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector
            onColorChange={this.onColorChange}
          />

          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
