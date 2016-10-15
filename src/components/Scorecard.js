import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Metric from './Metric';

const Scorecard = props => {
  return (
    <div>
    	<span className="scorecard-name">{props.name} </span>
    	<span className="chosen-year">{props.year}</span>
      <RaisedButton primary onTouchTap={() => props.nextYear()} label="Next Year" />
      <RaisedButton secondary onTouchTap={() => props.lastYear()} label="Last Year" />

  	  <Table>
  		  <TableHeader>
          <TableRow>
            <TableHeaderColumn>Metric</TableHeaderColumn>
            <TableHeaderColumn>Sample Size</TableHeaderColumn>
            <TableHeaderColumn>Prime</TableHeaderColumn>
            <TableHeaderColumn>Previous Year Restated</TableHeaderColumn>
            <TableHeaderColumn>Jan</TableHeaderColumn>
            <TableHeaderColumn>Feb</TableHeaderColumn>
            <TableHeaderColumn>Mar</TableHeaderColumn>
            <TableHeaderColumn>Apr</TableHeaderColumn>
            <TableHeaderColumn>May</TableHeaderColumn>
            <TableHeaderColumn>Jun</TableHeaderColumn>
            <TableHeaderColumn>Jul</TableHeaderColumn>
            <TableHeaderColumn>Aug</TableHeaderColumn>
            <TableHeaderColumn>Sep</TableHeaderColumn>
            <TableHeaderColumn>Oct</TableHeaderColumn>
            <TableHeaderColumn>Nov</TableHeaderColumn>
            <TableHeaderColumn>Dec</TableHeaderColumn>
            <TableHeaderColumn>YTD</TableHeaderColumn>
            <TableHeaderColumn>Target</TableHeaderColumn>
            <TableHeaderColumn className="red">Red</TableHeaderColumn>
            <TableHeaderColumn>Yellow</TableHeaderColumn>
            <TableHeaderColumn>Green</TableHeaderColumn>
          </TableRow>
  		  </TableHeader>
  		  <TableBody>
  			  {props.children}
  		  </TableBody>
  	  </Table>

    </div>
  );
}

module.exports = Scorecard;
