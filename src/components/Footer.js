/*
* Footer that reveals email link in textbox
*/

import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOn: false
    };

    this.showEmail = this.showEmail.bind(this);
  }

  showEmail(){
    this.setState({
      emailOn: true
    });
  }

  handleInputClick(event){
    event.target.select();
  }

  render() {
    return (
      <div>
        <footer onClick={this.showEmail} className={`${this.state.emailOn ? 'emailFooter' : ''}`}>

          {this.state.emailOn && 
            <div className="email-display">
              <input type="text" onClick={this.handleInputClick} defaultValue="taylordotsikas@gmail.com" />
            </div>
          }

          {!this.state.emailOn && 
            <div className="center-content">
              <h1>Taylor Dotsikas</h1>
              <span>Get in touch</span>
            </div>
          }
        </footer>
      </div>
    );
  }
}

export default Footer;


