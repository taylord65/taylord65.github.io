import React from "react";

class ScrollIndicator extends React.Component {
  //display on or off
  //size is off

  render() {
    return (
      <div className="scroll-indicator">
        <svg
          className="animated bounce"
          version="1.1"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          \
     <path
            fill="#FFFFFF"
            d="M158.628 177.372l-45.256 45.256 142.628 142.627 142.627-142.628-45.254-45.254-97.373 97.372z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default ScrollIndicator;
