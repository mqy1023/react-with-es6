import React, { Component, PropTypes } from 'react';
const contactsData = require('./../public/contacts.json'); //获取json数据

class ContactsAppContainer extends Component {
  constructor(){
    super();
    this.state={
      contacts: []
    };
  }

  componentDidMount(){
    this.setState({contacts: contactsData.datas});
  }

  render(){
    return (
      <ContactsApp contacts={this.state.contacts} />
    );
  }
}

// Renders a SearchBar and a ContactList
// Passes down filterText state and handleUserInput callback as props
class ContactsApp extends Component {
  constructor(){
    super();
    this.state={
      filterText: ''
    };
  }

  handleUserInput(searchText){
    this.setState({filterText: searchText})
  }

  render(){
    return(
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts}
                     filterText={this.state.filterText}/>
      </div>
    )
  }
}
ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}


// Pure component that receives 2 props from the parent
// filterText (string) and onUserInput (callback function)
class SearchBar extends Component {
  handleChange(event){
    this.props.onUserInput(event.target.value)
  }

  render(){
    return <input type="search"
                  placeholder="search"
                  value={this.props.filterText}
                  onChange={this.handleChange.bind(this)} />
  }
}
SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
}

// Pure component that receives both contacts and filterText as props
// The component is responsible for actualy filtering the
// contacts before displaying them.
// It's considered a pure component because given the same
// contacts and filterText props the output will always be the same.
class ContactList extends Component {
  render(){
    //过滤contacts中数据
    let filteredContacts = this.props.contacts.filter(
      (contact) => contact.name.indexOf(this.props.filterText) !== -1
    );
    return(
      <ul>
        {filteredContacts.map(
          (contact) => <ContactItem key={contact.email}
                                    name={contact.name}
                                    email={contact.email} />
        )}
       </ul>
    )
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
}

class ContactItem extends Component {
  render() {
    return <li>{this.props.name}   - -   {this.props.email}</li>
  }
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default ContactsAppContainer;
