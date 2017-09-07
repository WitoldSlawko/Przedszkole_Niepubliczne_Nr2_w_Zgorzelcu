import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/reset.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import WelcomeContent from './components/WelcomeContent';
import OfferContent from './components/OfferContent';
import GalleryContent from './components/GalleryContent';
import MoviesContent from './components/MoviesContent';
import ContactContent from './components/ContactContent';
import Gallery1 from './components/Gallery1';
import Gallery2 from './components/Gallery2';
import Gallery3 from './components/Gallery3';
import Gallery4 from './components/Gallery4';
import Gallery5 from './components/Gallery5';
import Gallery6 from './components/Gallery6';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WelcomeContent} />
      <Route path="offercontent" component={OfferContent} />
      <Route path="gallerycontent" component={GalleryContent} />
      <Route path="moviescontent" component={MoviesContent} />
      <Route path="contactcontent" component={ContactContent} />
      <Route path="gallery_1" component={Gallery1} />
      <Route path="gallery_2" component={Gallery2} />
      <Route path="gallery_3" component={Gallery3} />
      <Route path="gallery_4" component={Gallery4} />
      <Route path="gallery_5" component={Gallery5} />
      <Route path="gallery_6" component={Gallery6} />
    </Route>
  </Router>
), document.querySelector('[data-react-application]'));
