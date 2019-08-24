/*
* Arrows on either side of each page.
* Click an arrow to navigate through the pages.
*/

import React from "react";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: this.props.routerProps.location.pathname,
      urls: ['/soccer1', '/saildrone', '/fifthlight', '/teabot']
    };

    this.prevRoute = this.prevRoute.bind(this);
    this.nextRoute = this.nextRoute.bind(this);
  }

  prevRoute(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let index = this.state.urls.indexOf(this.state.route);

    if(index === 0){
      this.props.routerProps.history.push(this.state.urls[this.state.urls.length-1]);
    } else {
      this.props.routerProps.history.push(this.state.urls[index - 1]);
    }
  }

  nextRoute(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    let index = this.state.urls.indexOf(this.state.route);

    if(index === (this.state.urls.length - 1)){
      this.props.routerProps.history.push(this.state.urls[0]);
    } else {
      this.props.routerProps.history.push(this.state.urls[index + 1]);
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.prevRoute} className="side-text-left">
          <svg version="1.1" width="512" height="512" viewBox="0 0 512 512">
            <path
              fill="#FFFFFF"
              d="M158.628 177.372l-45.256 45.256 142.628 142.627 142.627-142.628-45.254-45.254-97.373 97.372z"
            ></path>
          </svg>
        </div>

        <div onClick={this.nextRoute} className="side-text-right">
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
