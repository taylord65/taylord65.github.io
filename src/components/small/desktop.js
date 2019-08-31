/*
* Macbook video display
*/

import React from "react";

class Desktop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="desktop-video">
        <img src="https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/macbook2X_noLabel.jpg" alt="Macbook" />
        <div class="video-container">
          <video loop autoPlay playsInline>
            <source src={this.props.src} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
        </div>
      </div>
    );
  }
}

export default Desktop;



