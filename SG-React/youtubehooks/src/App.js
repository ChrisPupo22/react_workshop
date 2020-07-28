import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import Youtube, { KEY } from "./components/Youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container ">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
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
