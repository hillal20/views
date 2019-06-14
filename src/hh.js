import React, { Component } from "react";

class Hh extends Component {
  render() {
    return (
      <div className="App">
        <h2>hello e</h2>
        <div>{this.props.fill}</div>
        <div>{this.props.bill}</div>
      </div>
    );
  }
}

export default Hh;
