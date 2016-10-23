import 'isomorphic-fetch';
import React, {PropTypes, Component} from 'react';

import Home from './Home.jsx';


class HomeContainer extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      isLoadingContacts: true,
      contacts: null
    }
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts = () => {
    fetch('api/contacts').then(res => res.json()
      .then(contacts => this.setState({ contacts, isLoadingContacts: false }))
    );
  };

  handleCreateContact = (formData) => {
    fetch('api/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(res => {
      if (res.ok) {
        this.getContacts()
      } else {
        console.log("Error creating contact");
      }
    })
  };

  handleDeleteContact = (id) => {
    fetch(`api/contacts/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        this.getContacts()
      } else {
        console.log("Error deleting contact");
      }
    })
  };

  render() {
    return(
      <Home
        {...this.state}
        onCreateContact={this.handleCreateContact}
        onDeleteContact={this.handleDeleteContact} />
    );
  }
}

export default HomeContainer;
