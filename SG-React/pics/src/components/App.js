import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = (term) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 8YmiAcvgpovlQk_QCjIyWw9cfZAuNTHAclqizusY2vY",
        },
      })
      .then((res) => {
        const results = res.data.results;
        this.setState({ images: results });
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
