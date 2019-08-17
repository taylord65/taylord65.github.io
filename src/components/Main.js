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
		      <Route path='/soccer1' render={(props) => <Soccer1 {...props} />}/>
		      <Route path='/fifthlight' render={(props) => <FifthLight {...props} />}/>
		      <Route path='/saildrone' render={(props) => <Saildrone {...props} />}/>
		      <Route path='/teabot' render={(props) => <TeaBot {...props} />}/>
		    </Switch>
		  </main>
		)
	}
}

export default Main;