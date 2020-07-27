import React, { useState, useEffect } from "react";
import axios from 'axios'; 

const SearchComp = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    const search = async () => {
        await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query', 
                list: 'search', 
                origin: '*', 
                format: 'json', 
                srsearch: term
            }
        })
    }
  }, [term]); 
  
  return (
    <div className="search">
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComp;
