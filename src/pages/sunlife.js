import React from "react";
import SidePanel from './../components/small/sidePanel'
import Footer from './../components/Footer'

class SunLife extends React.Component {
  render() {

    return (
      <div className="portfolio-feature">
        <SidePanel routerProps={this.props} />

        <Footer />
      </div>
    );
  }
}

export default SunLife;
