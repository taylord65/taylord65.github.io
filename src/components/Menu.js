import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { animateCSS } from '../helpers/animateCSS'

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
  		return this.props.onClick();
  	} else {
  		this.props.onClick();
  		
			setTimeout(function() {
				// Wait for menu to close 
				if (currentPathName === '/') {
					/*
					*	On the home page, add the fade out
					* and then route to the new page when the animation is finished
					*/
					let animations = ['fadeOut', 'faster'];
					animateCSS('#three', animations, () => {
						this.props.location.history.push(feature.path);
					});
				} else {
					/*
					*	On feature pages
					* Scroll to the top,
					* Wait
					* Then fade out the cover photo,
					* Then route to the new page
					*/
					let delayForScroll = window.scrollY === 0 ? 0 : 220;

  				document.body.scrollTop = document.documentElement.scrollTop = 0;

  				if (feature.path === '/sunlife') {
  					// Going to sun life, need to fade out the .scrollUpBack
	  				setTimeout(() => {
							animateCSS('.scrollUpBack', ['fadeOutDown', 'faster']); 
							animateCSS('.cover', ['fadeOut', 'faster'], () => {
								this.props.location.history.push(feature.path);
							}); 
						}, delayForScroll);
  				} else {
	  				setTimeout(() => {
							animateCSS('.cover', ['fadeOut', 'faster'], () => {
								this.props.location.history.push(feature.path);
							}); 
						}, delayForScroll);
  				}
				}
			}.bind(this), 320)
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
						<div className="menu-header"></div>

						<div className="feature-list">
							{this.state.features.map(feature => 
								<div key={feature.path} onClick={() => this.routeTo(feature)} className="feature">
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
