import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {

  constructor() {
    super();
    this.state = { count: 0 };
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  update() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
      />
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

// 点击 + 1
const Button = HOC((props) =>
  <button onClick={props.update}>{props.children} - {props.count}</button>
)

// 划过 + 1
class Label extends React.Component {
  componentWillMount() {
    console.log('Label componentWillMount');
  }
  render() {
    return (
      <label onMouseOver={this.props.update}>{this.props.children} - {this.props.count}</label>
    )
  }
}
const LabelHOC = HOC(Label);

export default App;
