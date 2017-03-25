import React from 'react';
import ReactDOM from 'react-dom';

class WelcomeContent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        Witamy na stronie naszego Przedszkola !
      </div>
    );
  }
}

export default WelcomeContent;