import React, { Component } from 'react';

import Scorecard from './Scorecard';
import SampleScorecards from '../Data';

export default class ViewScorecard extends Component {

  render() {
    return (
      <Scorecard
        name={SampleScorecards[0].name}
        year={SampleScorecards[0].chosenYear}
        metrics={SampleScorecards[0].metrics}
        nextYear={() => this.setState({ chosenYear: ++SampleScorecards[0].chosenYear })}
        lastYear={() => this.setState({ chosenYear: --SampleScorecards[0].chosenYear })}
      />
    );
  }

}
