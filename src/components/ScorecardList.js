import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';

import Scorecard from './Scorecard';
import SampleScorecards from '../Data';

export default class ScorecardList extends Component {

  _renderListItems() {
    return SampleScorecards.map((scorecard, i) => {
      return (
        <Link key={i} to="/">
          <ListItem>
            {scorecard.name}
          </ListItem>
        </Link>
      );
    })
  }

  render() {
    return <List>{this._renderListItems()}</List>;
  }
}
