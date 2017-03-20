import React from 'react';
import PhotoBook from './PhotoBook';

class Extra extends React.Component {
  constructor(props) {
    super();
    this.state = {
      clicked1: false,
      clicked2: false,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    }
    handleClick1() {
      this.setState({
        clicked1: true,
        clicked2: false,
      });
    }
  handleClick2() {
      this.setState({
        clicked1: false,
        clicked2: true,
      });
    }
    
   render() {
    return (
     <div className="container">
      <nav className="nav_1">
        {this.state.clicked1 ? <a onClick={this.handleClick1} style={{ background: 'lightblue', color: 'darkred' }} to="offercontent"><PhotoBook />Offer Link</a> : <a onClick={this.handleClick1} to="offercontent">Offer Link</a>}
        {this.state.clicked2 ? <a onClick={this.handleClick2} style={{ background: 'lightblue', color: 'darkred' }} to="offercontent">Offer Link</a> : <a onClick={this.handleClick2} to="offercontent">Offer Link</a>}
      </nav>
    </div>
    );
   }
};

export default Extra;
