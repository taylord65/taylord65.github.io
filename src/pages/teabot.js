import React from "react";
import SidePanel from "./../components/small/sidePanel";
import ScrollIndicator from './../components/small/scrollIndicator'
import Ipad from './../components/small/ipad'
import Footer from './../components/Footer'
import cover from './../images/tb_new_cover.jpg'

class TeaBot extends React.Component {
  render() {
    const coverStyle = {
      backgroundImage: `url(${cover})`
    };

    return (
      <div className="portfolio-feature">
        <SidePanel routerProps={this.props} />

        <div className="cover" id="tb_background" style={coverStyle}>
          <div className="cover-headline">
            <h1>teabot</h1>
            <h2>Design</h2>
            <h3>2014</h3>
          </div>
          <ScrollIndicator />
        </div>

        <div className="scrollUpBack">
          <div className="scrollUpSection">
            <div className="overview-banner">
              <div className="banner-container">
                <p>
                  teaBOT creates and deploys custom tea making machines. I worked closely
                  with the co founders and application developers to improve the UI and
         UX of the tablet application that controls the machine.{" "}
                </p>
              </div>
            </div>

            <div className="content-section">
              <div
                className="content-panel full-width-content"
                style={{ minHeight: "auto" }}
              >
                <h1>Quick and easy customer experience</h1>

                <Ipad src={'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/tb/menu.png'} landscape={false} />

                <div className="description-area">
                  <p>
                    The customer approaches the machine and the menu screen is displayed
                    on the tablet. From here, a custom blend can be created, or one of the
                    pre made blends can be chosen. Pre made options are displayed for
                    customers who don’t know how to create a custom blend that they will
                    enjoy. Pre made blends are ordered by popularity. The screen can be
                    swiped to reveal more. Each blend is color coded for the type of tea
                    it is comprised of.
         </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div
                className="content-panel full-width-content"
                style={{ minHeight: "auto" }}
              >
                <h1>Simple customization</h1>

                <Ipad src={'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/tb/customize.png'} landscape={false} />

                <div className="description-area">
                  <p>
                    The customer has the ability to create their own blend of tea. Up to
                    three blends can be added and their proportions can be configured with
                    the plus and minus buttons. The strength and caffeine level of the
                    resulting blend is displayed graphically with progress bars.
                    Condiments can can also be added to the tea with the plus and minus
                    buttons.
         </p>
                  <p>
                    Finally, the thermometer on the right defaults to the optimal
                    temperature setting. The customer has the ability to drag the line up
                    or down to adjust the temperature.
         </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div
                className="content-panel full-width-content"
                style={{ minHeight: "auto" }}
              >
                <h1>Checkout</h1>

                <Ipad src={'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/tb/checkout.png'} landscape={false} />

                <div className="description-area">
                  <p>
                    Tapping a blend, or confirming your customized blend brings you to the
                    Checkout page. From here, the user can customize their pre made
                    selection or tap “Make Blend” to tell the machine to begin pouring.
         </p>
                  <p>
                    Every detail of the order is clearly displayed on the page for the
                    customer to review.
         </p>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default TeaBot;
