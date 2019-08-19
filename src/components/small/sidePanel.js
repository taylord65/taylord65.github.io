import React from "react";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  //previous route
  //next route 

  render() {
    return (
      <div>
        <div className="side-text-left">
          <svg version="1.1" width="512" height="512" viewBox="0 0 512 512">
            <path
              fill="#FFFFFF"
              d="M158.628 177.372l-45.256 45.256 142.628 142.627 142.627-142.628-45.254-45.254-97.373 97.372z"
            ></path>
          </svg>
        </div>

        <div className="side-text-right">
          <svg version="1.1" width="512" height="512" viewBox="0 0 512 512">
            <path
              fill="#FFFFFF"
              d="M158.628 177.372l-45.256 45.256 142.628 142.627 142.627-142.628-45.254-45.254-97.373 97.372z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default SidePanel;
