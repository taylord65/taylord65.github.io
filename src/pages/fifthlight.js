import React from 'react'
import SidePanel from './../components/small/sidePanel'
import ScrollIndicator from './../components/small/scrollIndicator'
import Ipad from './../components/small/ipad'
import Footer from './../components/Footer'
import Fade from 'react-reveal/Fade'

class FifthLight extends React.Component {
  render() {
    const coverStyle = {
      backgroundImage: `url(${this.props.cover})`
    };

    return (
      <div className="portfolio-feature">

      <SidePanel routerProps={this.props} />
      <div className="animated fadeIn cover" id="fl_background" style={coverStyle}>
        <div className="cover-headline">
          <h1>Fifth light</h1>
          <h2>Design</h2>
          <h3>2015</h3>
        </div>
        <ScrollIndicator />
      </div>

      <div className="scrollUpBack">
        <div className="scrollUpSection">
          <div className="overview-banner">
            <div className="banner-container">
              <p>Fifth Light installs electrical devices in buildings and connects them to their management software for maintenance and control. I designed the user interface for a tablet application that assists a worker with installing the electrical devices.</p>
              <p>In the application, there is a tool for adding devices to the system, and a tool that scans the system to make sure everything was installed correctly.</p>
            </div>
          </div>

          <div className="content-section">
            <div className="content-panel full-width-content" style={{minHeight: 'auto'}}>
              <Fade>
                <h1>Built for speed</h1>
              </Fade>
              <Ipad src={'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/fl/addresser.png'} landscape={true} />
              <div className="description-area">
                <Fade>
                  <p>The client wanted an interface that would speed up the process of adding devices to the system. A tablet was selected as the best device for the worker to hold while walking around a building during the setup process.</p>
                  <p>The installed devices appear in a list on the left side of the screen. Up and down arrow buttons are used to select devices in the list. The buttons are placed in close proximity to the worker’s left hand for ergonomic comfort and ease of use.</p> 
                  <p>The primary use case is pressing the down arrow button to highlight a device in the list, and then tapping the device on the floor plan (not shown) to add its address ID into the field.</p>
                </Fade>
              </div>           
            </div>
          </div>

          <div className="content-section">
            <div className="content-panel full-width-content" style={{minHeight: 'auto'}}>
              <Fade>
                <h1>Complete system status visibility</h1>
              </Fade>
              <Ipad src={'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/fl/home.png'} landscape={true} />
              <div className="description-area">
                <Fade>
                  <p>Once all devices are connected, the worker then runs an installation check scan to see if everything is working correctly.</p>
                  <p>The home screen displays a list of ongoing and past scans for a full historical diagnosis of the system.</p>
                </Fade>
              </div>
              <Ipad src={'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/fl/scan.png'} landscape={true} />
              <div className="description-area">
                <Fade>
                  <p>The play button starts a new scan. During a scan, the worker is kept informed as the lighting control panels get updated with the latest information about the system. They can be expanded for a more detailed breakdown of all their installed devices.</p>
                </Fade>   
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="content-panel full-width-content" style={{minHeight: 'auto'}}>
              <Fade>
                <h1>Detailed report</h1>
              </Fade>
              <Ipad src={'https://s3.us-east-2.amazonaws.com/taylordotsikasportfolio/fl/report.png'} landscape={true} />
              <div className="description-area">
                <Fade>
                  <p>When the scan is finished, the worker is shown a report. The same expanding panels are used to allow the worker to view more information if they choose to. The status of each panel is shown even when the panel is closed, so at a glance, the worker can tell if there is a problem in the panel they need to bring their attention to.</p>
                  <p>If there are errors or warnings, they are listed at the top of the expanded panel. The worker can then fix the issues and then run the scan again to ensure that there are no more problems.</p>
                  <p>The application assists the worker during every step of the job allowing them to finish on time.</p>
                </Fade> 
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

export default FifthLight;