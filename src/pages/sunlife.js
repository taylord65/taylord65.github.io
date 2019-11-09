import React from "react"
import SidePanel from './../components/small/sidePanel'

class SunLife extends React.Component {

  render() {
    return (
      <div className="portfolio-feature three-feature">
        <SidePanel routerProps={this.props} />
        <div className="animated fadeIn cover slf-cover" id="s1_background">
          <div className="cover-headline slf-cover-headline">
            <h1>Sun Life</h1>
            <h2>Development</h2>
            <h3>Voice applications</h3>
            <h3>Current</h3>
          </div>
        </div>
        <div className="animated fadeIn ring-container">
          <div className="blue-ring">
            <div className="black-cover"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SunLife;
