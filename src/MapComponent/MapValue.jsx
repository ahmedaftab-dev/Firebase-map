import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { text,ClickedMarker } = props;
    return (
      <div className="marker"
      onClick={()=>ClickedMarker(text)}
        style={{ cursor: 'pointer'}}>
          {text}
        </div>
    );
  };

  export default Marker;