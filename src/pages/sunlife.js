import React from "react"
import SidePanel from './../components/small/sidePanel'

const skillUrl = "https://www.amazon.ca/Sun-Life-Financial/dp/B07F7F52J5";

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

        <div id="linkButton" onClick={()=> window.open(skillUrl, "_blank")}>
          <span>- View Alexa Skill -</span>
        </div>
      </div>
    );
  }
}

export default SunLife;
