import React from 'react';
import ReactDOM from 'react-dom';

class ContactLink extends React.Component {
  render() {
    return (
      <a {...this.props}>
        Contact Link
      </a>
    );
  }
}

export default ContactLink;
