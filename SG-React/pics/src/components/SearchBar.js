import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  /* Alternative approach to writing the function directly inside
     of curly brackets. Better for code that is not 1 line...
  */
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  onFormSubmit = (event) => {
    event.preventDefault(); 

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button className="ui button" style={{ marginTop: "10px" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
