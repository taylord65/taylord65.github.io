/*
* Ipad video display
* Used for both portrait and landscape.
*/

import React from "react";
import Fade from 'react-reveal/Fade'

class Ipad extends React.Component {
  render() {
    return (
      <div className={`${this.props.landscape ? 'ipadFeatureLandscape' : 'ipadFeaturePortrait'}`}>
      	<Fade>
        <img src={this.props.src} alt="Ipad" />
        </Fade>
      </div>
    );
  }
}

export default Ipad;