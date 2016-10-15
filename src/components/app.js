import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Scorecard from './Scorecard';
import Metric from './Metric';

export default class App extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
    this.state = {
      drawerOpen: false,
      scorecardName: 'Scorecard Name',
      chosenYear: 2016,
      metrics: [
        {
          metricName: 'Capital Actual',
          format: '0.0%',
          order: 3,
          data: {
            2014: {
              sampleSize: 'Enough',
              prime: 'Dwight',
              prevYearRestated: 19,
              months: [.2,.3,.1,.4,.9,.4,.5,.6,.2,.1,.11,.7],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
            2015: {
              sampleSize: 'Not enough',
              prime: 'Jim',
              prevYearRestated: 19,
              months: [.3,.4,.2,.5,.10,.5,.6,.7,.3,.2,.12,.8],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
            2016: {
              sampleSize: 'A lot',
              prime: 'Micheal',
              prevYearRestated: 19,
              months: [.4000,.5555,.3656,.66756,.1521,.6234234,.723,.238,-.674,-.3,-0.4513,.789],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
          }
        },
        {
          metricName: 'Operating Expense',
          format: '$ 0.0 a',
          order: 1,
          data: {
            2014: {
              sampleSize: 'Enough',
              prime: 'Dwight',
              prevYearRestated: 19,
              months: [2,3,1,4,9,4,5,6,2,1,11,7],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
            2015: {
              sampleSize: 'Not enough',
              prime: 'Jim',
              prevYearRestated: 19,
              months: [3,4,2,5,10,5,6,7,3,2,12,8],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
            2016: {
              sampleSize: 'A lot',
              prime: 'Micheal',
              prevYearRestated: 19,
              months: [4000,5555,3656,66756,1521,6234234,723,238,-674,-3,-0.4513,6789],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
          }
        },
        {
          metricName: 'Bad Debt',
          format: '$0,0',
          order: 2,
          data: {
            2014: {
              sampleSize: 'Enough',
              prime: 'Dwight',
              prevYearRestated: 19,
              months: [2,3,1,4,9,4,5,6,2,1,11,7],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
            2015: {
              sampleSize: 'Not enough',
              prime: 'Jim',
              prevYearRestated: 19,
              months: [3,4,2,5,10,5,6,7,3,2,12,8],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
            2016: {
              sampleSize: 'A lot',
              prime: 'Micheal',
              prevYearRestated: 19,
              months: [4000,5555,3656,66756,1521,6234234,723,238,-674,-3,-0.4513,6789],
              ytd: 14,
              target: 12,
              red: 2,
              yellow: 2,
              yelhigh: 5,
              green: 5
            },
          }
        }
      ]
    };
  }

  drawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

  _renderMetrics() {
    const sortedMetrics = this.state.metrics.sort((a, b) => a.order - b.order);
    return sortedMetrics.map((metric, i) => {
      return (<Metric key={i} metric={metric} year={this.state.chosenYear} />);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Scorecard Generator"
            onTouchTap={this.drawerToggle}/>
          <Drawer open={this.state.drawerOpen}>
            <MenuItem>View Scorecards</MenuItem>
            <MenuItem>New Scorecard</MenuItem>
            <MenuItem>About</MenuItem>
          </Drawer>
          <Scorecard
            name={this.state.scorecardName}
            year={this.state.chosenYear}
            nextYear={() => this.setState({ chosenYear: ++this.state.chosenYear })}
            lastYear={() => this.setState({ chosenYear: --this.state.chosenYear })}>
            {this._renderMetrics()}
          </Scorecard>
        </div>
      </MuiThemeProvider>
    );
  }
}
