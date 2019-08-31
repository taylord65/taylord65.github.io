import React from 'react'
import {Link} from "react-router-dom"
import { CSSTransitionGroup } from 'react-transition-group'

class Menu extends React.Component {
	render() {
		return (
			<div>

        <CSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
				{this.props.showMenu &&
					<div key="menu" className="menu">
						<div className="menu-header">
						</div>

						<div className="feature-list">
							<Link to="/slf" className="feature">
								<div className="feature-info">
									<h1><div className="indicator"></div>Sun Life Alexa</h1>
									<span>Development</span>
									</div>
									<div className="feature-date">
									<span>Current</span>
								</div>
							</Link>

							<Link to="/soccer1" className="feature">
								<div className="feature-info">
									<h1><div className="indicator"></div>Soccer-1</h1>
									<span>Design and Development</span>
									</div>
									<div className="feature-date">
									<span>2016-2017</span>
								</div>
							</Link>

							<Link to="/saildrone" className="feature">
									<div className="feature-info">
										<h1><div className="indicator"></div>Saildrone</h1>
											<span>Design and Development</span>
										</div>
										<div className="feature-date">
									<span>2016</span>
								</div>
							</Link>

							<Link to="/fifthlight" className="feature">
								<div className="feature-info">
									<h1><div className="indicator"></div>Fifth Light</h1>
									<span>Design</span>
									</div>
									<div className="feature-date">
									<span>2015</span>
								</div>
							</Link>

							<Link to="/teabot" className="feature">
								<div className="feature-info">
										<h1><div className="indicator"></div>teaBot</h1>
										<span>Design</span>
										</div>
										<div className="feature-date">
									<span>2014</span>
								</div>
							</Link>
						</div>

						<div className="menu-footer">
						<span>Get in touch</span>
						<span className="email-link">taylordotsikas@gmail.com</span>
						</div>
					</div>
				}
				</CSSTransitionGroup>

				<div className="menu-button-container" onClick={this.props.onClick}>
					<div id="menuIcon" className={(this.props.showMenu ? 'open' : 'closed')}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					{!this.props.showMenu && 
						<span id="workLabel">WORK</span>
					}
				</div>

			</div>
		)
	}
}

export default Menu;
