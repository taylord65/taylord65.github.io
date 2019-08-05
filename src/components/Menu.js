import React from 'react'
import {Link} from "react-router-dom"

const Menu = () => (
	<div>
	  <div className="menu">
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

	      <Link to="/graphicdesign" className="feature">
	        <div className="feature-info singleTitle">
	          <h1><div className="indicator"></div>Graphic Design</h1>
	        </div>
	        <div className="feature-date">
	        </div>
	      </Link>
	    </div>

	    <div className="menu-footer">
	      <span>Get in touch</span>
	      <span className="email-link">taylordotsikas@gmail.com</span>
	    </div>
	  </div>
	    
	  <div className="menu-button-container">
	    <div id="menuIcon">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	      <span id="workLabel">WORK</span>
	  </div>
    
	</div>
)

export default Menu