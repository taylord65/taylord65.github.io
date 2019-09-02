/*
* Ipad video display
* Used for both portrait and landscape.
*/

import React from "react";

class Ipad extends React.Component {
  render() {
    return (
      <div className={`${this.props.landscape ? 'ipadFeatureLandscape' : 'ipadFeaturePortrait'}`}>
        <img src={this.props.src} alt="Ipad" />
      </div>
    );
  }
}

export default Ipad;