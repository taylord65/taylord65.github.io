import React from "react"
import { ReactComponent as Iphone } from './iphoneSVG.svg'
import noVideoLoaded from './../../images/error-flat.png'

class IphoneVideo extends React.Component {
  render() {
    return (
      <div className="iphone-container">
        <Iphone />
        <div className="video-container">
          <video loop autoPlay muted playsInline>
            <source src={`https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/${this.props.src}.mp4`} type="video/mp4" />
            <source src={`https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/webm/${this.props.src}.webm`} type="video/webm" />
            <img src={noVideoLoaded} alt="Your browser does not support the <video> tag" />
          </video>
        </div>
      </div>
    );
  }
}

export default IphoneVideo;
