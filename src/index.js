import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './components/app';
import ViewScorecard from './components/ViewScorecard';
import ScorecardList from './components/ScorecardList';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>

      <Route path="/" component={App}>
        <IndexRoute component={ViewScorecard} />
      </Route>

      <Route path="scorecards" component={App}>
        <IndexRoute component={ScorecardList} />
      </Route>

      <Route path="scorecard" component={App}>
        <Route path=":name" component={ViewScorecard}>

        </Route>
      </Route>

    </Router>
  </Provider>
  , document.getElementById('app'));
