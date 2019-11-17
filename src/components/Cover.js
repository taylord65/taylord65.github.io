import React from "react"

const zeroPoint = document.documentElement.clientHeight * 0.28;

class Cover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      opacity: 1
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      opacity: (-1 * document.documentElement.scrollTop/zeroPoint) + 1,
    });
  }

  render() {
    return (
      <div className="animated fadeIn cover" id={this.props.coverId} style={this.props.coverStyle}>
        <div className="cover-headline" style={{opacity: this.state.opacity}}>
          <h1>{this.props.content.h1}</h1>
          <h2>{this.props.content.h2}</h2>
          <h3>{this.props.content.h3}</h3>
        </div>
      </div>
    );
  }
}

export default Cover;
