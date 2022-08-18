import React from "react";
import "./style.css";

export default class App extends React.Component {
  state = {
    count: 1,
  };
  add = () => {
    console.log("add");
    let count = this.state.count + 1;
    this.setState({
      count: count,
    });
  };
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <p> count is : {this.state.count}</p>
        <h2 onClick={this.add}>2021</h2>
        {this.state.count % 2 != 1 ? <MyCom /> : ""}
      </div>
    );
  }
}

class MyCom extends React.Component {
  constructor(name, age) {
    super();

    console.log("constructor");
  }
  state = {
    name: "zc",
    count: 1,
  };
  showName = () => {
    // alert(`you name is ${this.name}    age is ${this.age}`);

    this.setState({
      name: "zcc",
    });
    console.log("change name");
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.showName}> 我是按钮 {this.state.name}</button>
      </div>
    );
  }
  // 组件卸载阶段

  componentWillUnmount() {
    console.log("componentWillUnmount", "组件卸载");
  }
}

