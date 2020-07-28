import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="searchBar ui segment" style={{ marginTop: "15px" }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label className="searchComp">Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <button className="ui button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
