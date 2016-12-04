import React from 'react';

class MapApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentWillMount() {
    fetch('http://xxxxx')
      .then(response => response.json())
      .then({ results: items } => this.setState({ items }))
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {
          items.map(item =>
            <Person key={item.name} person={item} />
          )
        }
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default MapApp;
