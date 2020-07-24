import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from './VideoList'; 
import { KEY } from '../apis/youtube'; 

class App extends Component {
    state = { videos: [] }; 


  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
        I have {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
