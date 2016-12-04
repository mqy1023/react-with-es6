import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: '' }
  }

  update() {
    this.setState({
      a: this.refsA.refs.input.value,
    })
  }

  render() {
    return <div>
      <Input
        ref={ component => this.refsA = component }
        value={this.state.a}
        update = {this.update.bind(this)}
      />{this.state.a}
    </div>
  }
}
const Input extends React.Component {
  render() { // because input is in div, not the Outermost component非最外一层组件
    return <div> <input ref="input" onChange={this.props.update} /> <div>
  }
}
