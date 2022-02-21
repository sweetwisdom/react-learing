import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
class Header extends Component {
  constructor() {
    super();
    this.isGood = true;
  }
  render() {
    const name = "zccc";

    return (
      <div>
        <h1
          onClick={() => {
            console.log("123");
          }}
        >
          React {name}
        </h1>
        {this.isGood ? <strong>is good 🤣 </strong> : <span> is good 😀</span>}
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
