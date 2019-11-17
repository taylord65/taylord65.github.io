import React from "react"
import { animateCSS } from '../helpers/animateCSS'
import { setBackgroundToBlack } from '../helpers/setBackgroundToBlack'
import { CSSTransitionGroup } from 'react-transition-group'
import { goToRoute } from '../helpers/goToRoute'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeaderDetails: false,
      enterTimeout: 1000,
      leaveTimeout: 230
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.routeTo = this.routeTo.bind(this);
  }

  getHeaderTitle(currentRoute) {
    switch (currentRoute) {
      case "/slf":
        return "Sun Life";
      case "/soccer1":
        return "Soccer-1";
      case "/saildrone":
        return "Saildrone";
      case "/fifthlight":
        return "Fifth Light";
      case "/teabot":
        return "teaBot";
      default:
        return '';
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps){
    if (this.props.routerProps.location.pathname !== prevProps.routerProps.location.pathname) {
      // Route Change. Avoid black bar from showing again
      this.setState({
        showHeaderDetails: false
      });
    }
  }

  routeTo() {
    setBackgroundToBlack();

    this.setState({
      showHeaderDetails: false
    });

    goToRoute(this.props.routerProps.location.pathname, '/', this.props.routerProps.history, animateCSS, true);
  }

  handleScroll(event) {
    if (document.getElementsByClassName("scrollUpSection")[0]) {
      const node = document.querySelector('.cover');

      if (document.getElementsByClassName("scrollUpSection")[0].getBoundingClientRect().top - document.getElementsByTagName("header")[0].offsetHeight < 0) {
        this.setState({
          showHeaderDetails: true
        });
        node.classList.remove('animated');
        node.classList.remove('fadeIn');
        node.classList.add('hidden-cover');
      } else {
        this.setState({
          showHeaderDetails: false
        });

        node.classList.remove('hidden-cover');
      }
    }
  }

  render() {
    return (
      <div>
        <header>
          <CSSTransitionGroup
            transitionName="homeicon"
            transitionEnterTimeout={this.state.enterTimeout}
            transitionLeaveTimeout={this.state.leaveTimeout}>
            {this.props.routerProps.location.pathname !== "/" && 
            <div onClick={this.routeTo} className="home-icon">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 64 64"
                enableBackground="new 0 0 64 64"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M25.6,53.4V21.9H14.1V10.6h35.8v11.3H38.5v31.5H25.6z"
                  />
                </g>
                <rect x="43.7" y="47.2" fill="#FFFFFF" width="6.2" height="6.2" />
              </svg>
            </div>
            }
          </CSSTransitionGroup>
        </header>

        {(this.props.routerProps.location.pathname !== "/" && this.state.showHeaderDetails) && (
          <div className="rect-fill animated fadeInDown faster">
            <h1>
              {this.getHeaderTitle(this.props.routerProps.location.pathname)}
            </h1>
          </div>
        )}
      </div>
    );
  }
}

export default Header;