import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	features: [
    		{
    			label: 'Sun Life',
    			subLabel: 'Voice Development',
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
    	]
    };

    this.routeTo = this.routeTo.bind(this);
  }

  routeTo(feature) {
  	if (this.props.location.location.pathname === feature.path) {
  		//Close the menu
  		return this.props.onClick();
  	} else {
  		this.props.onClick();
		setTimeout(function() { 
			this.props.location.history.push(feature.path);
		}.bind(this), 320)
  	}
  }

	render() {
		return (
			<div>

	    <CSSTransitionGroup
	      transitionName="slide"
	      transitionEnterTimeout={300}
	      transitionLeaveTimeout={300}>
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
	      transitionEnterTimeout={300}
	      transitionLeaveTimeout={300}>
				{this.props.showMenu &&
					<div className="black-curtain" onClick={this.props.onClick}></div>
				}
		</CSSTransitionGroup>
			</div>
		)
	}
}

export default Menu;
