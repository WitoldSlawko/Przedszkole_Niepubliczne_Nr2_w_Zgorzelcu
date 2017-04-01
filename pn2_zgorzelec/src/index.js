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
import Gallery_1 from './components/Gallery_1';
import Gallery_2 from './components/Gallery_2';
import Gallery_3 from './components/Gallery_3';
import Gallery_4 from './components/Gallery_4';
import Gallery_5 from './components/Gallery_5';
import Gallery_6 from './components/Gallery_6';

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
        {this.state.clicked1 ? <Link onClick={this.handleClick1} style={{ background: 'black', color: 'gold' }} to="offercontent">Oferta</Link> : <Link onClick={this.handleClick1} to="offercontent">Oferta</Link>}
        {this.state.clicked2 ? <Link onClick={this.handleClick2} style={{ background: 'black', color: 'gold' }} to="gallerycontent">Galeria</Link> : <Link onClick={this.handleClick2} to="gallerycontent">Galeria</Link>}
        {this.state.clicked3 ? <Link onClick={this.handleClick3} style={{ background: 'black', color: 'gold' }} to="moviescontent">Wideoteka</Link> : <Link onClick={this.handleClick3} to="moviescontent">Wideoteka</Link>}
        {this.state.clicked4 ? <Link onClick={this.handleClick4} style={{ background: 'black', color: 'gold' }} to="contactcontent">Kontakt</Link> : <Link onClick={this.handleClick4} to="contactcontent">Kontakt</Link>}
      </nav>
      <main>
        <aside className="left_as">
          <div className="kid_frame">
            <div className="kid_topleft"></div>
          </div>
          <div className="kid_frame">
            <div className="kid_downleft"></div>
          </div>
        </aside>
        <div className="content">
          {this.props.children}
        </div>
        <aside className="right_as">
          <div className="kid_frame">
            <div className="kid_topright"></div>
          </div>
          <div className="kid_frame">
            <div className="kid_downright"></div>
          </div>
        </aside>
      </main>
      <footer>Copyright by Witold Sławko</footer>
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
      <Route path="gallery_1" component={Gallery_1} />
      <Route path="gallery_2" component={Gallery_2} />
      <Route path="gallery_3" component={Gallery_3} />
      <Route path="gallery_4" component={Gallery_4} />
      <Route path="gallery_5" component={Gallery_5} />
      <Route path="gallery_6" component={Gallery_6} />
    </Route>
  </Router>
), document.querySelector('[data-react-application]'));
