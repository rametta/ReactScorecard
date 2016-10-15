import React, { Component } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import numeral from 'numeral';

export default class Metric extends Component {

	getColor(value) {
		const data = this.props.metric.data[this.props.year];

		if(value < data.red) {
			return 'red';
		} else if (value >= data.yellow && value <= data.yelhigh) {
			return 'yellow';
		} else if (value > data.green) {
			return 'green';
		} else {
			return 'white';
		}
	}

	formatValue(value) {
		const format = this.props.metric.format;
		return numeral(value).format(format);
	}

	getMonthlyData() {
		const data = this.props.metric.data[this.props.year].months;
		return data.map((value, i) => {
			return (
        <TableRowColumn
          key={i}
          className={this.getColor(value)}>
            {this.formatValue(value)}
        </TableRowColumn>
            );
		});
	}

	render() {
		const { metric, year } = this.props;
		const data = metric.data[year];
		return (
			<TableRow>
				<TableRowColumn>{metric.metricName}</TableRowColumn>
				<TableRowColumn>{data.sampleSize}</TableRowColumn>
				<TableRowColumn>{data.prime}</TableRowColumn>
				<TableRowColumn>{this.formatValue(data.prevYearRestated)}</TableRowColumn>
				{this.getMonthlyData()}
				<TableRowColumn className={this.getColor(data.ytd)}>{data.ytd}</TableRowColumn>
				<TableRowColumn>{this.formatValue(data.target)}</TableRowColumn>
				<TableRowColumn>{data.red}</TableRowColumn>
				<TableRowColumn>{data.yellow} - {data.yelhigh}</TableRowColumn>
				<TableRowColumn>{data.green}</TableRowColumn>
			</TableRow>
		);
	}
};
