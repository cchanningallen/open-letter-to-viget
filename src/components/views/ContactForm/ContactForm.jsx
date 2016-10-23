import './ContactForm.scss';

import React, {PropTypes, Component} from 'react';

class ContactForm extends Component {
  static propTypes = {
    onCreate: PropTypes.func.isRequired
  };

  handleSubmit = () => {
    this.props.onCreate({
      firstName: "Jenne",
      lastName: "Nguyen",
      email: "jenny@mondorobot.com"
    })
  };

  render() {
    return (
      <div className="ContactForm">
        <a className="button button-approve"
           onClick={this.handleSubmit}>
          Create Contact
        </a>
      </div>
    );
  }
}

export default ContactForm;
