import React, { Component } from 'react'; 

class LanguageSelector extends Component {
  render() {
    return (
      <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => {
              this.props.onLanguageChange("english");
              this.props.onColorChange("red");
            }}
          />
          <i
            className="flag nl"
            onClick={() => {
              this.props.onLanguageChange("dutch");
              this.props.onColorChange("primary");
            }}
          />
        </div>
    )
  }
}; 

export default LanguageSelector; 

