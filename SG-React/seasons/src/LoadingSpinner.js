import React from 'react'; 

const LoadingSpinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message || 'Loading...'}</div>
        </div>
    );
};

export default LoadingSpinner; 