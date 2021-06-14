import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div>
        <h2>To do app</h2>
        <div>
          <input type="text" />
          <button type="button">Add</button>
        </div>
      </div>
    );
  }
}
