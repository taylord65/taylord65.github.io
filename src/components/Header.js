import React from "react";
import { Link } from "react-router-dom";

//On route change from home sometimes the details show at the top
//on route change should set details to show as false

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeaderDetails: false
    };

    this.handleScroll = this.handleScroll.bind(this);
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

  handleScroll(event) {
    if (document.getElementsByClassName("scrollUpSection")[0]) {
      if (document.getElementsByClassName("scrollUpSection")[0].getBoundingClientRect().top - document.getElementsByTagName("header")[0].offsetHeight < 0) {
        this.setState({
          showHeaderDetails: true
        });
      } else {
        this.setState({
          showHeaderDetails: false
        });
      }
    }
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="home-icon">
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
          </Link>
        </header>

        {(this.props.currentRoute !== "/" && this.state.showHeaderDetails) && (
          <div className="rect-fill">
            <h1 className="animated fadeIn">
              {this.getHeaderTitle(this.props.currentRoute)}
            </h1>
          </div>
        )}
      </div>
    );
  }
}

export default Header;