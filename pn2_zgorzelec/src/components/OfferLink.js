import React from 'react';
import ReactDOM from 'react-dom';

class OfferLink extends React.Component {
  render() {
    return (
      <a {...this.props}>
        Offer Link
      </a>
    );
  }
}

export default OfferLink;
