import React from "react"
import SidePanel from './../components/small/sidePanel'
import animateCSS from './../helpers/animateCSS'
import { CSSTransitionGroup } from 'react-transition-group'

const skillUrl = "https://www.amazon.ca/Sun-Life-Financial/dp/B07F7F52J5";

class SunLife extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: false
    };
  }

  componentDidMount() {
    const timeUntilButton = 1400;
    this.timerHandle =  setTimeout(() => {
      this.setState({
        showButton: true,
      });      

    }, timeUntilButton);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
    }
  }

  render() {
    return (
      <div className="portfolio-feature three-feature">
        {this.state.showButton && 
          <div className="animated fadeIn">
          <SidePanel routerProps={this.props} />
          </div>
        }

        <div className="cover slf-cover" id="s1_background"> 
          <div className="animated fadeIn cover-headline slf-cover-headline">
            <CSSTransitionGroup
              transitionName="slfFade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {!this.state.showButton &&
                <div>
                  <h1>Sun Life</h1>
                  <h2>Development</h2>
                  <h3>Current</h3>
                </div>
              }
            </CSSTransitionGroup>

            {this.state.showButton && 
              <div className="animated fadeIn" id="linkButton" onClick={()=> window.open(skillUrl)}>
                <div id="linkButtonText">View Alexa Skill</div>
              </div>
            }
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
