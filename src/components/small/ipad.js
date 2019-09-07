/*
* Ipad video display
* Used for both portrait and landscape.
*/

import React from "react";
import Fade from 'react-reveal/Fade'

class Ipad extends React.Component {
  render() {
    return (
    <Fade big>
      <div className={`${this.props.landscape ? 'ipadFeatureLandscape' : 'ipadFeaturePortrait'}`}>
        <img src={this.props.src} alt="Ipad" />
      </div>
    </Fade>
    );
  }
}

export default Ipad;