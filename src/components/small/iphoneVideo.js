import React from "react"
import { ReactComponent as Iphone } from './iphoneSVG.svg'

class IphoneVideo extends React.Component {
  render() {
    return (
      <div className="iphone-container">
        <Iphone />
        <div className="video-container">
          <video loop autoPlay muted playsInline>
            <source src={this.props.src} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
        </div>
      </div>
    );
  }
}

export default IphoneVideo;
