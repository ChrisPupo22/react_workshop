import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from './LanguageSelector'; 

class App extends Component {
  state = { language: "english", color: "red" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  onColorChange = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onColorChange={this.onColorChange} onLanguageChange={this.onLanguageChange} />
        
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
