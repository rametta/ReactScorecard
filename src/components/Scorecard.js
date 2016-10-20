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

  /* TODO: move to Redux Actions when that's setup properly */
  changeYear(type) {
    //Copy the current year
    let cYear = this.state.year;
    //Get the next potential year
    if(type === "INC") {
      cYear = ++cYear;
    } else if(type === "DEC") {
      cYear = --cYear;
    }
    //Check if there's data for that year
    if(typeof this.state.scorecard.metrics[0].data[cYear] !== "undefined") {
      //If there is, change the state
      this.setState({year: cYear});
    }
  }

  _renderMetrics() {
    const sortedMetrics = this.state.scorecard.metrics.sort((a, b) => a.order - b.order);
    return sortedMetrics.map((metric, i) => {
      if(typeof metric.data[this.state.year] === "undefined") return;
      return <Metric key={i} metric={metric} year={this.state.year} />;
    });
  }

  render() {
    return (
      <div>
      	<span className="scorecard-name">{this.state.scorecard.name} </span>
      	<span className="chosen-year">{this.state.year}</span>
        <RaisedButton primary onTouchTap={() => this.changeYear("INC")} label="Next Year" />
        <RaisedButton secondary onTouchTap={() => this.changeYear("DEC")} label="Last Year" />

    	  <Table responsive condensed hover>
    		  <thead>
            <tr>
              <th>Metric</th>
              <th>Sample Size</th>
              <th>Prime</th>
              <th>{this.state.year - 1} Restated</th>
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
