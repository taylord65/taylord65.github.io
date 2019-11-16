import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { animateCSS } from '../helpers/animateCSS'
import { goToRoute } from '../helpers/goToRoute'

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	features: [
    		{
    			label: 'Sun Life',
    			subLabel: 'Development',
    			date: 'Current',
    			path: '/sunlife'
    		},
    		{
    			label: 'Soccer-1',
    			subLabel: 'Design and Development',
    			date: '2016-2017',
    			path: '/soccer1'
    		},
    		{
    			label: 'Saildrone',
    			subLabel: 'Design and Development',
    			date: '2016',
    			path: '/saildrone'
    		},
    		{
    			label: 'Fifth Light',
    			subLabel: 'Desgin',
    			date: '2015',
    			path: '/fifthlight'
    		},
    		{
    			label: 'teaBot',
    			subLabel: 'Design',
    			date: '2014',
    			path: '/teabot'
    		}
    	],
    	enterTimeout: 280,
    	leaveTimeout: 230
    };

    this.routeTo = this.routeTo.bind(this);
  }

  routeTo = (feature) => {
  	let currentPathName = this.props.location.location.pathname;

  	if (currentPathName === feature.path) {
  		return this.props.onClick(); //Close the MENU
  	} else {
  		this.props.onClick(); //Close the MENU
		goToRoute(currentPathName, feature.path, this.props.location.history, animateCSS);
  	}
  };

	render() {
		return (
			<div>
	    <CSSTransitionGroup
	      transitionName="slide"
	      transitionEnterTimeout={this.state.enterTimeout}
	      transitionLeaveTimeout={this.state.leaveTimeout}>
				{this.props.showMenu &&
					<div key="menu" className="menu">
						<div className="menu-header">
							<span>Portfolio</span>
						</div>

						<div className="feature-list">
							{this.state.features.map(feature => 
								<div key={feature.path} onClick={() => this.routeTo(feature)} className={`feature ${this.props.location.location.pathname === feature.path ? 'currentFeature' : ''}`}>

									<div className="feature-info">
										<h1><div className="indicator"></div>{feature.label}</h1>
										<span>{feature.subLabel}</span>
										</div>
										<div className="feature-date">
										<span>{feature.date}</span>
									</div>
								</div>
							)}
						</div>

						<div className="menu-footer">
							<span>Contact</span>
							<span className="email-link">taylordotsikas@gmail.com</span>
						</div>
					</div>
				}
				</CSSTransitionGroup>

				<div className={`menu-button-container ${this.props.location.location.pathname === "/" ? 'homeScreen' : ''}`} onClick={this.props.onClick}>
					<div id="menuIcon" className={(this.props.showMenu ? 'open' : 'closed')}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					{!this.props.showMenu && 
						<span id="workLabel">WORK</span>
					}
				</div>

		    <CSSTransitionGroup
		      transitionName="fade"
		      transitionEnterTimeout={this.state.enterTimeout}
		      transitionLeaveTimeout={this.state.leaveTimeout}>
					{this.props.showMenu &&
						<div className="black-curtain" onClick={this.props.onClick}></div>
					}
				</CSSTransitionGroup>
			</div>
		)
	}
}

export default Menu;
