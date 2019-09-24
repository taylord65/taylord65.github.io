import React from 'react';
import './css/app.css';
import './css/animate.min.css';

import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'

import { withRouter } from "react-router-dom"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    	showMenu: false
    };

    this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
    this.handleOffMenuClick = this.handleOffMenuClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      if (this.state.showMenu) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
		    this.setState({
		      showMenu: false
		    })
      }
    }
  }

  handleMenuIconClick() {
    this.setState({showMenu: !this.state.showMenu});
  }

  handleOffMenuClick() {
    if (this.state.showMenu) this.setState({showMenu: false});
  }


  render() {
  	return (
		  <div className="App">
		  	<Header routerProps={this.props} />
		  	<Menu location={this.props} onClick={this.handleMenuIconClick} showMenu={this.state.showMenu}/>
		    <Main onClick={this.handleOffMenuClick} showMenu={this.state.showMenu} />
		  </div>
  	)
  }
}

export default withRouter(props => <App {...props} />);