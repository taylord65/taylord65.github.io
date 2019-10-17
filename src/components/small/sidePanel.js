/*
* Arrows on either side of each page.
* Click an arrow to navigate through the pages.
*/

import React from "react";
import { animateCSS } from '../../helpers/animateCSS'

const routesWithoutScrollUp = ['/', '/sunlife'];

class SidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: this.props.routerProps.location.pathname,
      urls: ['/sunlife', '/soccer1', '/saildrone', '/fifthlight', '/teabot']
    };

    this.prevRoute = this.prevRoute.bind(this);
    this.nextRoute = this.nextRoute.bind(this);
  }

  routeTo(nextRoute){
    let delayForScroll = window.scrollY === 0 ? 0 : 220;
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    setTimeout(() => {
      if (nextRoute === '/sunlife') {
        // Going to sun life, need to fade out the .scrollUpBack

        animateCSS('.cover', ['fadeOut', 'faster']);
        animateCSS('.scrollUpBack', ['fadeOutDown', 'faster'], () => {
          this.props.routerProps.history.push(nextRoute);
        }); 
      } else {
        animateCSS('.cover', ['fadeOut', 'faster'], () => {
          this.props.routerProps.history.push(nextRoute);

          // Fade in up the scroll up section if it appears for the first time
          if (!routesWithoutScrollUp.includes(nextRoute) && routesWithoutScrollUp.includes(this.state.route)) {
            animateCSS('.scrollUpBack', ['fadeInUp', 'faster']); 
          }
        }); 
      }

    }, delayForScroll);
  }

  prevRoute(){
    let index = this.state.urls.indexOf(this.state.route);

    if(index === 0) {
      this.routeTo(this.state.urls[this.state.urls.length-1]);
    } else {
      this.routeTo(this.state.urls[index - 1]);
    }
  }

  nextRoute(){
    let index = this.state.urls.indexOf(this.state.route);

    if(index === (this.state.urls.length - 1)){
      this.routeTo(this.state.urls[0]);
    } else {
      this.routeTo(this.state.urls[index + 1]);
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
