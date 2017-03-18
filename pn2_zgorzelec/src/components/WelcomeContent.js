import React from 'react';
import ReactDOM from 'react-dom';

class WelcomeContent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        Welcome Content
      </div>
    );
  }
}

export default WelcomeContent;