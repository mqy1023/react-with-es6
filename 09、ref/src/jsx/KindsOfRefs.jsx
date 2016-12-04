import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: '' }
  }

  update() {
    this.setState({
      a: this.refsA.value,
      b: this.refs.b.value
    })
  }

  render() {
    return <div>
      <input
        ref={ node => this.refsA = node }
        value={this.state.a}
        onChange = {this.updateState.bind(this)}
      />{this.state.a}
      <hr />
      <input
        ref="b"
        value={this.state.b}
        onChange = {this.updateState.bind(this)}
      />{this.state.b}
    </div>
  }
}
