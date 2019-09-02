import React from 'react'
import SidePanel from './../components/small/sidePanel'
import ScrollIndicator from './../components/small/scrollIndicator'
import TabbedContent from './../components/small/tabbedContent'
import Desktop from './../components/small/desktop'

class Saildrone extends React.Component {
  render() {
    const imgUrl = 'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/sd/sd_cover.jpg';

    const coverStyle = {
      backgroundImage: `url(${imgUrl})`
    };
    return (
      <div className={`portfolio-feature ${this.props.showMenu ? 'unfocusedFeature' : ''}`}>

        <SidePanel routerProps={this.props} />

              <div className="cover" id="sd_background" style={coverStyle}>
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

                              <Desktop src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/sd/sd_first.mp4"} />

                              <div className="description-area">
                                <p>
                                    Defining your mission is broken down into 3 simple steps. Answer
                                    some questions, define coordinates, and submit your mission by
                                    creating an account.
                                </p>

                                <TabbedContent tabdata={[
                                    {
                                      title: 'State Awareness',
                                      id: 0,
                                      text: 'The user is always aware of what step they are on by viewing the navigation at the top. At the bottom of the fixed panel, there are back and next buttons that let the user anticipate what has to be done next and smoothly guide them through the process.'
                                    },
                                    {
                                      title: 'Explorable interface',
                                      id: 1,
                                      text: 'The user doesn’t need to create an account until the very end. They are free to begin with filling out the form or defining coordinates. The path of least resistance is outlined to the user, but those who wish to explore are free to do so.'
                                    }
                                  ]}>
                                </TabbedContent>
                              </div>
                          </div>
                      </div>

                      <div className="content-section">
                        <div className="content-panel full-width-content" style={{ minHeight: 'auto' }}>
                              <h1>Map based planning</h1>

                              <Desktop src={"https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/saildroneVideo.mp4"} />

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
                                <TabbedContent tabdata={[
                                    {
                                      title: 'Always allow undo',
                                      id: 0,
                                      text: 'Each action can be undone with the undo button. You can also click and drag data points on the map to move them and expand areas by adding points to them. Doing so will automatically update the coordinates in the side panel.'
                                    },
                                    {
                                      title: 'Simple submission',
                                      id: 1,
                                      text: 'To submit your mission you simply supply your email and password!'
                                    }
                                  ]}>
                                </TabbedContent>
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



