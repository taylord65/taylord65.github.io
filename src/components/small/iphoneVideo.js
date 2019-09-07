import React from "react"
import { ReactComponent as Iphone } from './iphoneSVG.svg'
import Fade from 'react-reveal/Fade'

class IphoneVideo extends React.Component {
  render() {
    return (
      <div className="iphone-container">
        <Iphone />
        <Fade big>
        <div className="video-container">
          <video loop autoPlay muted playsInline>
            <source src={this.props.src} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
        </div>
        </Fade>
      </div>
    );
  }
}

export default IphoneVideo;
