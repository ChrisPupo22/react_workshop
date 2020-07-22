import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'; 
import LoadingSpinner from './LoadingSpinner'; 

class App extends Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState()
        this.setState({ lat: position.coords.latitude });
        // console.log(position)
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <LoadingSpinner message={'waiting on user permission...'}/>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
