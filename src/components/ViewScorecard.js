import React, { Component } from 'react';

import Scorecard from './Scorecard';
import SampleScorecards from '../Data';

export default class ViewScorecard extends Component {

  render() {
    const index = parseInt(this.props.params.id);
    const scorecard = SampleScorecards[index];
    return (
      <Scorecard
        name={scorecard.name}
        year={scorecard.chosenYear}
        metrics={scorecard.metrics}
        nextYear={() => this.setState({ chosenYear: ++scorecard.chosenYear })}
        lastYear={() => this.setState({ chosenYear: --scorecard.chosenYear })}
      />
    );
  }

}
