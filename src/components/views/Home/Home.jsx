import './Home.scss';

import React, { PropTypes, Component } from 'react';
import ContactsList from 'components/views/ContactsList';
import ContactForm from 'components/views/ContactForm';

class Home extends Component {
  static propTypes = {
    isLoadingContacts: PropTypes.bool.isRequired,
    onCreateContact: PropTypes.func.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array,
  };

  render() {
    const { isLoadingContacts, onCreateContact, ...props } = this.props;

    return (
      <div className="Home">
        <h1 className="Home__title">Hello, world!</h1>
        <div className="grid-flex-container">
          <div className="grid-flex-cell-1of2">
            <ContactsList {...{isLoading: isLoadingContacts, ...props}} />
          </div>
          <div className="grid-flex-cell-1of2">
            <ContactForm onCreate={onCreateContact} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
