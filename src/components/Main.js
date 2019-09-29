import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ThreeScene from './ThreeScene'
import Soccer1 from './../pages/soccer1'
import FifthLight from './../pages/fifthlight'
import Saildrone  from './../pages/saildrone'
import TeaBot from './../pages/teabot'
import SunLife from './../pages/sunlife'

import flCover from './../images/fl_cover_dark.jpg'
import sdCover from './../images/sd_cover.jpg'
import s1Cover from './../images/s1_cover_faded.png'
import tbCover from './../images/tb_new_cover.jpg'

class Main extends React.Component {
	render() {
		return (
		  <main>
		    <Switch>
		      <Route exact path='/' render={(props) => <ThreeScene {...props} blurOn={this.props.showMenu} />}/>

		      <Route path='/sunlife' render={(props) => <SunLife {...props} showMenu={this.props.showMenu}/>}/>
		      <Route path='/soccer1' render={(props) => <Soccer1 {...props} showMenu={this.props.showMenu} cover={s1Cover} />}/>
		      <Route path='/fifthlight' render={(props) => <FifthLight {...props} showMenu={this.props.showMenu} cover={flCover} />}/>
		      <Route path='/saildrone' render={(props) => <Saildrone {...props} showMenu={this.props.showMenu} cover={sdCover} />}/>
		      <Route path='/teabot' render={(props) => <TeaBot {...props} showMenu={this.props.showMenu} cover={tbCover} />}/>
		    </Switch>
		  </main>
		)
	}
}

export default Main;