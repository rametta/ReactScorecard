import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class App extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
    this.state ={
      drawerOpen: false
    }
  }

  drawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Scorecard Generator"
            onTouchTap={this.drawerToggle}
          />

          <Drawer open={this.state.drawerOpen}>
            <MenuItem>View Scorecards</MenuItem>
            <MenuItem>New Scorecard</MenuItem>
            <MenuItem>About</MenuItem>
          </Drawer>

          {this.props.children}

        </div>
      </MuiThemeProvider>
    );
  }
}
