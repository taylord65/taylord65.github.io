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
      <Fade big>
        <div className="video-container">
          <video loop autoPlay playsInline>
            <source src={this.props.src} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
        </div>
      </Fade>

      </div>
    );
  }
}

export default Desktop;



