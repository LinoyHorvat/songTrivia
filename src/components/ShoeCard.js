import React, { Component } from "react";
import shoe from "./shoe.png";
export default class ShoeCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="shoeCard">
        <img
          src={shoe}
          alt="shoe"
          style={{ height: "50px", width: "auto", margin: "auto" }}
        ></img>
        <h3>{this.props.name}</h3>
        <h5>Price: {this.props.price}</h5>
        <h5>Size: {this.props.size}</h5>
        <button onClick={this.props.Delete}>Delete</button>
        <button onClick={this.props.Update}>Update</button>
      </div>
    );
  }
}
