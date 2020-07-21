import React from "react";


const CommentDetail = (props) => {
    return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={props.avatar} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.commentText}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
