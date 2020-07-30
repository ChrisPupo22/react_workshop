import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  
  if (!song) {
    return <div className="ui warning message">Please Select a song</div>;
  }
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Song Details</div>
      </div>
      <div className="content">
        <h2 className="title">Title: {song.title}</h2>
        <h2 className="duration">Duration: {song.duration}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
