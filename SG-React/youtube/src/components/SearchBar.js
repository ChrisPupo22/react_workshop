import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    initInput: "",
  };

  onUserInput = (e) => {
    this.setState({ initInput: e.target.value });
  }

  onButtonClick = (e) => {
    e.preventDefault(); 

    this.props.onFormSubmit(this.state.initInput); 
  }; 

  render() {
    return (
      <div className="searchBar ui segment">
        <form onSubmit={this.onButtonClick} className="ui form">
          <div className="field">
            <label className="searchComp">Video Search</label>
            <input
              type="text"
              value={this.state.initInput}
              onChange={this.onUserInput}
            />
          </div>
          <button className="ui button" >Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
