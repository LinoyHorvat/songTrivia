import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          onChange={this.props.onChange}
          type="text"
          placeholder="Enter..."
        />
      </div>
    );
  }
}
