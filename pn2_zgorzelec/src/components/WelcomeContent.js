import React from 'react';
import ReactDOM from 'react-dom';

class WelcomeContent extends React.Component {
  render() {
    return (
      <div className="powitanie">
        <h1>
          Witamy na stronie naszego Przedszkola !
        </h1>
      </div>
    );
  }
}

export default WelcomeContent;

/*
render() {
    return (
      <div {...this.props}>
        Witamy na stronie naszego Przedszkola !
      </div>
    );
  }
*/