import React from 'react';
import './css/app.css';
import './css/animate.min.css';

import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    	showMenu: false
    };

    this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
  }

  handleMenuIconClick() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
  	return (
		  <div className="App">
		  	<Header />
		  	<Menu onClick={this.handleMenuIconClick} showMenu={this.state.showMenu}/>
		    <Main showMenu={this.state.showMenu} />
		  </div>
  	)
  }
}

export default App;