import './ContactsList.scss';

import React, {PropTypes, Component} from 'react';
import ContactCard from 'components/views/ContactCard';

class ContactsList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array
  };

  contactsList(contacts, onDelete) {
    if (contacts.length > 0) {
      return(
        <div className="Home__contacts-list">
          {contacts.map((props, key) =>
            <ContactCard {...props} {...{key, onDelete}} />
          )}
        </div>
      )
    } else {
      return 'You have no contacts. Add one!'
    }
  }

  render() {
    const { isLoading, contacts, onDeleteContact } = this.props;

    return (
      <div className="ContactsList">
        {isLoading ? 'Loading...' : null}
        {contacts ? this.contactsList(contacts, onDeleteContact) : null}
      </div>
    );
  }
}

export default ContactsList;
