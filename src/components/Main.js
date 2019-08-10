import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ThreeScene from './ThreeScene'

class Main extends React.Component {

	render() {
		return (
		  <main>
		    <Switch>
		      <Route exact path='/' render={(props) => <ThreeScene {...props} blurOn={this.props.showMenu} />}/>
		    </Switch>
		  </main>
		)
	}
}

export default Main;