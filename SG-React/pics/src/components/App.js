import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList'; 

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = (term) => {
    unsplash
      .get("/search/photos", {
        params: { query: term },
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
        <ImageList imageResults={this.state.images} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
