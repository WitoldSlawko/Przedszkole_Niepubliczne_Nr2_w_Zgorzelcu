import React from 'react';
//import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      clicked1: false,
      clicked2: false,
      clicked3: false,
      clicked4: false
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    }
    handleClick1() {
      this.setState({
        clicked1: true,
        clicked2: false,
        clicked3: false,
        clicked4: false
      });
    }
    handleClick2() {
      this.setState({
        clicked1: false,
        clicked2: true,
        clicked3: false,
        clicked4: false
      });
    }
    handleClick3() {
      this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: true,
        clicked4: false
      });
    }
    handleClick4() {
     this.setState({
        clicked1: false,
        clicked2: false,
        clicked3: false,
        clicked4: true
     });
   }
   render() {
    return (
     <Main textToRender={this.props.children} 
			 		click1={this.state.clicked1}
			 		click2={this.state.clicked2}
			 		click3={this.state.clicked3} 
			 		click4={this.state.clicked4}
			 		handleClick1={this.handleClick1}
			 		handleClick2={this.handleClick2}
			 		handleClick3={this.handleClick3}
			 		handleClick4={this.handleClick4}/>
    );
   }
};

export default App;
