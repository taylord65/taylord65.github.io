/*
* Tabbed Content section
* TO DO: transition the paragraph text as fade in and out.
*/

import React from "react";

class TabbedContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.tabdata[0],
      tabs: this.props.tabdata
    };
    
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(id){
    this.setState({
      activeTab: this.state.tabs[id]
    });
  }

  render() {
    return (
      <div className="tabbed-content">
        <div className="title-row">
          {this.state.tabs.map((tab) => 
            <div className={`tab-title ${this.state.activeTab.id === tab.id ? 'activeTitle' : ''}`} key={tab.id} onClick={this.setActiveTab.bind(this, tab.id)}>
              {tab.title}
            </div>
          )}
        </div>
        <p className="tab-content-area">
          {this.state.activeTab.text}
        </p>
      </div>
    );
  }
}

export default TabbedContent;
