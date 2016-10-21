import './Home.scss';

import React, { Component } from 'react';

class Home extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      contacts: null
    }
  }

  componentDidMount() {
    fetch('api/contacts').then(res => res.json()
      .then(contacts => this.setState({ contacts }))
    );
  }

  contactItem({firstName, lastName}, key) {
    return(
      <div {...{key}} className="Home__contact-item">
        {`Name: ${firstName} ${lastName}`}
      </div>
    )
  }

  contactsList() {
    const { contacts } = this.state;

    if (contacts) {
      return(
        <div className="Home__contacts-list">
          {contacts.map((contact, i) => this.contactItem(contact, i))}
        </div>
      )
    } else {
      return 'Loading...'
    }
  }

  render() {
    return (
      <div className="Home">
        <h1 className="Home__title">Hello, world!</h1>
        {this.contactsList()}
      </div>
    );
  }
}

export default Home;
