import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: '' }
  }

  update() {
    this.setState({
      a: ReactDom.findDOMNode(this.refsA).value,
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
  render() { // because input is the Outermost component最外一层组件
    return <input onChange={this.props.update} />
  }
}
