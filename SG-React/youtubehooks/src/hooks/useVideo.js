import { useState, useEffect } from "react";
import Youtube, { KEY } from "../components/Youtube";


const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term,
      },
    });

    setVideos(response.data.items); 
  };

  return [videos, search]; 
};

export default useVideos; 
