import React, { Component } from "react";
import ReactDOM from "react-dom";

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
    };
  }
  handleClickOnclick() {
    this.setState({
      isLike: !this.state.isLike,
    });
  }
  render() {
    return <button onClick={this.handleClickOnclick.bind(this)}>{this.state.isLike ? "取消" : "点赞👍"}</button>;
  }
}
class Title extends Component {
  titleClick(e) {
    console.log(e.target, "this is Title");
  }
  render() {
    return <h1 onClick={this.titleClick}>React 小书</h1>;
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <h2>This is Header</h2>
      </div>
    );
  }
}
class Main extends Component {
  render() {
    return (
      <div>
        <h2>This is main content</h2>
      </div>
    );
  }
}
class Footer extends Component {
  render() {
    return (
      <div>
        <h2>This is footer</h2>
      </div>
    );
  }
}
class Index extends Component {
  render() {
    return (
      <div>
        <LikeButton></LikeButton>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
