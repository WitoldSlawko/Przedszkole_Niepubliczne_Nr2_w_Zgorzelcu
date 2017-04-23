import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

import Header from './components/Header';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Header}/>
  </Router>
),
  document.getElementById('app')
);
