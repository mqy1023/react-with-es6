import React from 'react';
// import Buttons from './cloneElement/Buttons';
import ReactDom from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      red: 0,
      green: 128,
      blue: 255
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      red: ReactDom.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDom.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDom.findDOMNode(this.refs.blue.refs.inp).value,
    })
  }

  render() {
    return (
      <div>
        <Slider ref="red" update={this.update} value={this.state.red} />{this.state.red}<br />
        <Slider ref="green" update={this.update} value={this.state.green} />{this.state.green}<br />
        <Slider ref="blue" update={this.update} value={this.state.blue} />{this.state.blue}<br />
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type="range"
          min="0"
          max="255"
          value={this.props.value}
          onChange={this.props.update}
        />
      </div>
    )
  }
}

export default App;
