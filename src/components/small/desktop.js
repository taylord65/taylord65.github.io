/*
* Macbook video display
*/

import React from "react";
import Fade from 'react-reveal/Fade'

class Desktop extends React.Component {
  render() {
    return (
      <div className="desktop-video">
        <img src="https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/macbook2X_noLabel.jpg" alt="Macbook" />
        <div className="video-container">
        <Fade>
          <video loop autoPlay playsInline muted>
            <source src={`https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/${this.props.src}.mp4`} type="video/mp4" />
            <source src={`https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/webm/${this.props.src}.webm`} type="video/webm" />
          </video>
        </Fade>
        </div>
      </div>
    );
  }
}

export default Desktop;



