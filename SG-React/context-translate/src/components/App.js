import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class App extends Component {
  state = { language: "english", color: "primary" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  onColorChange = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => {
              this.onLanguageChange("english");
              this.onColorChange("red");
            }}
          />
          <i
            className="flag nl"
            onClick={() => {
              this.onLanguageChange("dutch");
              this.onColorChange("primary");
            }}
          />
        </div>
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
