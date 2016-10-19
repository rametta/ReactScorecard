import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';

import Metric from './Metric';
import SampleScorecards from '../Data';

export default class Scorecard extends Component {
  constructor(props) {
    super(props);
    const index = parseInt(this.props.params.id);
    this.state = {
      year: new Date().getFullYear(),
      scorecard: SampleScorecards[index]
    };
  }

  _renderMetrics() {
    const sortedMetrics = this.state.scorecard.metrics.sort((a, b) => a.order - b.order);
    return sortedMetrics.map((metric, i) => {
      return (<Metric key={i} metric={metric} year={this.state.year} />);
    });
  }

  render() {
    return (
      <div>
      	<span className="scorecard-name">{this.state.scorecard.name} </span>
      	<span className="chosen-year">{this.state.year}</span>
        <RaisedButton primary onTouchTap={() => this.setState({ year: ++this.state.year })} label="Next Year" />
        <RaisedButton secondary onTouchTap={() => this.setState({ year: --this.state.year })} label="Last Year" />

    	  <Table responsive condensed hover>
    		  <thead>
            <tr>
              <th>Metric</th>
              <th>Sample Size</th>
              <th>Prime</th>
              <th>Previous Year Restated</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
              <th>YTD</th>
              <th>Target</th>
              <th className="red">Red</th>
              <th className="yellow">Yellow</th>
              <th className="green">Green</th>
            </tr>
    		  </thead>
    		  <tbody>
    			  {this._renderMetrics()}
    		  </tbody>
    	  </Table>

      </div>
    );
  }
}
