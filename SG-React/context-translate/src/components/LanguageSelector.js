import React, { Component } from 'react'; 
import LanguageContext from '../context/LanguageContext'; 

class LanguageSelector extends Component {
  static contextType = LanguageContext; 
  
  render() {
    console.log(this.context)
    return (
      <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => {
              this.context.onLanguageChange("english");
              this.props.onColorChange("red");
            }}
          />
          <i
            className="flag nl"
            onClick={() => {
              this.context.onLanguageChange("dutch");
              this.props.onColorChange("primary");
            }}
          />
        </div>
    )
  }
}; 

export default LanguageSelector; 

