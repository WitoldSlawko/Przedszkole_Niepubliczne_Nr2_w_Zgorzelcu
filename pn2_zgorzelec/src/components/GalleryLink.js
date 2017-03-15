import React from 'react';
import ReactDOM from 'react-dom';

class GalleryLink extends React.Component {
  render() {
    return (
      <a {...this.props}>
        Gallery Link
      </a>
    );
  }
}

export default GalleryLink;
