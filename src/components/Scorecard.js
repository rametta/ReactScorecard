import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import Metric from './Metric';

export default class Scorecard extends Component {
  constructor() {
    super();
  }

  _renderMetrics() {
    const sortedMetrics = this.props.metrics.sort((a, b) => a.order - b.order);
    return sortedMetrics.map((metric, i) => {
      return (<Metric key={i} metric={metric} year={this.props.year} />);
    });
  }

  render() {
    return (
      <div>
      	<span className="scorecard-name">{this.props.name} </span>
      	<span className="chosen-year">{this.props.year}</span>
        <RaisedButton primary onTouchTap={() => this.props.nextYear()} label="Next Year" />
        <RaisedButton secondary onTouchTap={() => this.props.lastYear()} label="Last Year" />

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
