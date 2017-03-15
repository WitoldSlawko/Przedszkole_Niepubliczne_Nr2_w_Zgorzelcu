import React from 'react';
import ReactDOM from 'react-dom';

class MapLink extends React.Component {
  render() {
    return (
      <a {...this.props}>
        Map Link
      </a>
    );
  }
}

export default MapLink;
