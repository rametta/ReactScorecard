import React, { Component } from 'react';

import Scorecard from './Scorecard';
import SampleData from '../Data';

export default class ViewScorecard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Scorecard
        name={SampleData.scorecardName}
        year={SampleData.chosenYear}
        metrics={SampleData.metrics}
        nextYear={() => this.setState({ chosenYear: ++SampleData.chosenYear })}
        lastYear={() => this.setState({ chosenYear: --SampleData.chosenYear })}
      />
    );
  }
}
