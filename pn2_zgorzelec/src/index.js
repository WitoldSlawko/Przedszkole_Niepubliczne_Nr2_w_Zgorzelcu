import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Header from './components/Header';
import WelcomeContent from './components/WelcomeContent';
import OfferContent from './components/OfferContent';
import GalleryContent from './components/GalleryContent';
import MoviesContent from './components/MoviesContent';
import ContactContent from './components/ContactContent';

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
     <div className="container">
      <Header />
      <nav className="nav_1">
        {this.state.clicked1 ? <Link onClick={this.handleClick1} style={{ background: 'lightblue', color: 'darkred' }} to="offercontent">Offer Link</Link> : <Link onClick={this.handleClick1} to="offercontent">Offer Link</Link>}
        {this.state.clicked2 ? <Link onClick={this.handleClick2} style={{ background: 'lightblue', color: 'darkred' }} to="gallerycontent">Gallery Link</Link> : <Link onClick={this.handleClick2} to="gallerycontent">Gallery Link</Link>}
        {this.state.clicked3 ? <Link onClick={this.handleClick3} style={{ background: 'lightblue', color: 'darkred' }} to="moviescontent">Movies Link</Link> : <Link onClick={this.handleClick3} to="moviescontent">Movies Link</Link>}
        {this.state.clicked4 ? <Link onClick={this.handleClick4} style={{ background: 'lightblue', color: 'darkred' }} to="contactcontent">Contact Link</Link> : <Link onClick={this.handleClick4} to="contactcontent">Contact Link</Link>}
      </nav>
      <main>
        <aside className="left_as"></aside>
        <div className="content">
          {this.props.children}
        </div>
        <aside className="right_as"></aside>
      </main>
      <footer></footer>
    </div>
    );
   }
};

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WelcomeContent} />
      <Route path="offercontent" component={OfferContent} />
      <Route path="gallerycontent" component={GalleryContent} />
      <Route path="moviescontent" component={MoviesContent} />
      <Route path="contactcontent" component={ContactContent} />
    </Route>
  </Router>
), document.querySelector('[data-react-application]'));
