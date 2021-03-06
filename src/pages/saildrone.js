import React from 'react'
import SidePanel from './../components/small/sidePanel'
import TabbedContent from './../components/small/tabbedContent'
import Desktop from './../components/small/desktop'
import Footer from './../components/Footer'
import Cover from './../components/Cover'
import Fade from 'react-reveal/Fade'

class Saildrone extends React.Component {
  render() {
    const coverStyle = {
      backgroundImage: `url(${this.props.cover})`
    };

    const coverContent = {
      h1: 'Saildrone mission builder', 
      h2: 'Design and development', 
      h3: '2016'
    };

    return (
      <div className="portfolio-feature">
        <SidePanel routerProps={this.props} />
        <Cover content={coverContent} coverId={'sd_background'} coverStyle={coverStyle} />

        <div className="scrollUpBack">
          <div className="scrollUpSection">
            <div className="overview-banner">
              <div className="banner-container">
                <p>
                  Saildrone utilizes a fleet of autonomous drone sailboats to collect
                  high resolution ocean data. I created a desktop web application that clients can use to easily plan and
                  manage their ocean data collection missions.
                </p>
              </div>
            </div>

            <div className="content-section">
              <div className="content-panel full-width-content" style={{ minHeight: 'auto' }}>
                  <Fade>
                    <h1>Define your data mission</h1>
                  </Fade>
                  
                  <Desktop src={"sd/sd_first"} />
                  <div className="description-area">
                  <Fade>
                    <p>
                      Defining your mission is broken down into 3 simple steps. Answer
                      some questions, define coordinates, and submit your mission by
                      creating an account.
                    </p>
                  </Fade>

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
                <Fade>
                  <h1>Map based planning</h1>
                </Fade>

                <Desktop src={"saildroneVideo"} />

                <div className="description-area">
                  <Fade>
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
                  </Fade>
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

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Saildrone;



