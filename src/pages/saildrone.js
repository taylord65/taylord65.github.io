import React from 'react'
import SidePanel from './../components/small/sidePanel'
import ScrollIndicator from './../components/small/scrollIndicator'

class Saildrone extends React.Component {
  render() {
    return (
      <div className="portfolio-feature">

        <SidePanel />

              <div className="cover" id="sd_background">
                  <div className="cover-headline">
                      <h1>Saildrone mission builder</h1>
                      <h2>Design and development</h2>
                      <h3>2016</h3>
                  </div>
                  <ScrollIndicator />
              </div>

              <div className="scrollUpBack">
                  <div className="scrollUpSection">
                      <div className="overview-banner">
                          <div className="banner-container">
                              <p>
                                  Saildrone utilizes a fleet of autonomous drone sailboats to collect
                                  high resolution ocean data. I worked closely with the COO to create
                                  a desktop web application that clients can use to easily plan and
                                  manage their ocean data collection missions.
                              </p>
                          </div>
                      </div>

                      <div className="content-section">
                        <div className="content-panel full-width-content" style={{ minHeight: 'auto' }}>
                              <h1>Define your data mission</h1>

                              <div className="description-area">
                                  <p>
                                      Defining your mission is broken down into 3 simple steps. Answer
                                      some questions, define coordinates, and submit your mission by
                                      creating an account.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="content-section">
                        <div className="content-panel full-width-content" style={{ minHeight: 'auto' }}>
                              <h1>Map based planning</h1>

                              <div className="description-area">
                                  <p>
                                      A map based interface was the best solution for the user to select
                                      where they want to send their saildrone.
                                  </p>
                                  <p>
                                      The user can choose to define waypoints for the saildrone to
                                      travel to, or a rough area where they want the saildrone to
                                      explore. GPS coordinates are displayed over the cursor for users
                                      who want to explore precise locations. Coordinates appear in the
                                      side panel as you choose them. Navionics API for google maps was
                                      also integrated to reveal more ocean data on the map.
                                  </p>
                                  <p>
                                      The app is complete with a login system to review and edit your
                                      mission as well as an administrator panel for the Saildrone team
                                      to proceed with conducting the submitted missions.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}

export default Saildrone;



