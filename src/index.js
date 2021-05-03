import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Service from './components/Service.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/services" component={Service} />
      <Route exact path="/services/1" component={Service} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
