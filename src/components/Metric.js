import React, { Component } from 'react';
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
        <td
          key={i}
          className={this.getColor(value)}>
            {this.formatValue(value)}
        </td>
            );
		});
	}

	render() {
		const { metric, year } = this.props;
		const data = metric.data[year];
		return (
			<tr>
				<td>{metric.metricName}</td>
				<td>{data.sampleSize}</td>
				<td>{data.prime}</td>
				<td>{this.formatValue(data.prevYearRestated)}</td>
				{this.getMonthlyData()}
				<td className={this.getColor(data.ytd)}>{data.ytd}</td>
				<td>{this.formatValue(data.target)}</td>
				<td>{data.red}</td>
				<td>{data.yellow} - {data.yelhigh}</td>
				<td>{data.green}</td>
			</tr>
		);
	}
};
