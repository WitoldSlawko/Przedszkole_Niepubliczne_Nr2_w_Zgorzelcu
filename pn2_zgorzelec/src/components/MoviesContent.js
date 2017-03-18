import React from 'react';
import ReactDOM from 'react-dom';

class MoviesContent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        Movies Content
      </div>
    );
  }
}

export default MoviesContent;
