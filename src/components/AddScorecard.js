import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddScorecard extends Component {
  constructor() {
    super();
    this.state = { name: "" };
  }
  render() {
    return (
      <div>
        <TextField
          hintText="Bell Real Estate"
          floatingLabelText="Scorecard Name"
          onChange={ev => this.setState({name: ev.target.value}) }/>
        <br />
        <RaisedButton primary onTouchTap={() => console.log(this.state.name)} label="Add Scorecard" />
      </div>
    );
  }
}
