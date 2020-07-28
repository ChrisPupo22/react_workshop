import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import useVideos from './hooks/useVideo'; 


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('');

  useEffect(() => {
    setSelectedVideo(videos[0]); 
  }, [videos])

  return (
    <div className="ui container ">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
