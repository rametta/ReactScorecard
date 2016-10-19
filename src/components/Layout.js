import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

export default class Layout extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
    this.state ={
      drawerOpen: false,
      menuItems: [
        {path: '/', title: 'Home'},
        {path: '/scorecards', title: 'View Scorecards'},
        {path: '/new', title: 'New Scorecard'},
        {path: '/about', title: 'About'}
      ]
    }
  }

  drawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

  _renderMenuItems() {
    return this.state.menuItems.map((item, i) => {
      return(
        <Link to={item.path} key={i}>
          <MenuItem onTouchTap={this.drawerToggle}>{item.title}</MenuItem>
        </Link>
      );
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Scorecard Generator"
            onTouchTap={this.drawerToggle}
          />

          <Drawer open={this.state.drawerOpen}>
            {this._renderMenuItems()}
          </Drawer>

          {this.props.children}

        </div>
      </MuiThemeProvider>
    );
  }
}
