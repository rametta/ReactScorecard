import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import AddScorecard from './components/AddScorecard';
import Scorecard from './components/Scorecard';
import ScorecardList from './components/ScorecardList';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>

      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="scorecards" component={ScorecardList}></Route>
        <Route path="new" component={AddScorecard}></Route>
        <Route path="about" component={About}></Route>
        <Route path="scorecard">
          <Route path=":id" component={Scorecard}></Route>
        </Route>
      </Route>

    </Router>
  </Provider>
  , document.getElementById('app'));
