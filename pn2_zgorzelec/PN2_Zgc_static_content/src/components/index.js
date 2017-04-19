import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

import Header from './components/Header';
/*
import OfferContent from './components/OfferContent';
import GalleryContent from './components/GalleryContent';
import MapContent from './components/MapContent';
import ContactContent from './components/ContactContent';
import OfferLink from './components/OfferLink';
import GalleryLink from './components/GalleryLink';
import MapLink from './components/MapLink';
import ContactLink from './components/ContactLink';
*/
/*
class App extends React.Component {
  constructor() {
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
     <div className="container">
      <Header />
      <nav>
        <OfferLink onClick={this.handleClick1} />
        <GalleryLink onClick={this.handleClick2} />
        <MapLink onClick={this.handleClick3} />
        {this.state.clicked4 ? <ContactLink onClick={this.handleClick4} style={{ background: 'lightblue', color: 'darkred' }}/> : <ContactLink onClick={this.handleClick4} />}
      </nav>
      <main>
        <aside className="left_as"></aside>
        <div className="content">
          {this.state.clicked1 ? <OfferContent /> : null}
          {this.state.clicked2 ? <GalleryContent /> : null}
          {this.state.clicked3 ? <MoviesContent /> : null}
          {this.state.clicked4 ? <ContactContent /> : null}
        </div>
        <aside className="right_as"></aside>
      </main>
      <footer></footer>
    </div>
    );
   }
};
*/

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Header}/>
  </Router>
),
  document.getElementById('app')
);
