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
import Gallery_1 from './components/Gallery_1';
import Gallery_2 from './components/Gallery_2';
import Gallery_3 from './components/Gallery_3';
import Gallery_4 from './components/Gallery_4';
import Gallery_5 from './components/Gallery_5';
import Gallery_6 from './components/Gallery_6';

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
