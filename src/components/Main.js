import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ThreeScene from './ThreeScene'
import Soccer1 from './../pages/soccer1'
import FifthLight from './../pages/fifthlight'
import Saildrone  from './../pages/saildrone'
import TeaBot from './../pages/teabot'

class Main extends React.Component {

	render() {
		return (
		  <main>
		    <Switch>
		      <Route exact path='/' render={(props) => <ThreeScene {...props} blurOn={this.props.showMenu} />}/>
		      <Route path='/soccer1' render={(props) => <Soccer1 {...props} showMenu={this.props.showMenu} />}/>
		      <Route path='/fifthlight' render={(props) => <FifthLight {...props} showMenu={this.props.showMenu} />}/>
		      <Route path='/saildrone' render={(props) => <Saildrone {...props} showMenu={this.props.showMenu} />}/>
		      <Route path='/teabot' render={(props) => <TeaBot {...props} showMenu={this.props.showMenu} />}/>
		    </Switch>
		  </main>
		)
	}
}

export default Main;