import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./List";

// class List extends Component{
//     constructor() {
//         super()
//     }

// }

class IndexT extends Component {
  constructor() {
    super();
    this.state = {
      unlikeText: "请点赞",
    };
  }
  render() {
    return (
      <div>
        <p>
          <input
            onChange={(e) => {
              this.setState({
                unlikeText: e.target.value + "赞赞👍🏻",
              });
              //   console.log(e.target.value);
            }}
          ></input>
        </p>
        <button
          onClick={() => {
            this.setState({
              unlikeText: "赞赞👍🏻",
            });
          }}
        >
          改变值
        </button>
        <LikeButton likedText="已经点赞啦❤️" unlikeText={this.state.unlikeText}>
          {" "}
        </LikeButton>
      </div>
    );
  }
}
class LikeButton extends Component {
  static defaultProps = {
    likedText: "已赞",
    unlikeText: "赞👍🏻",
  };
  constructor() {
    super();

    this.state = {
      isLike: false,
    };
  }
  handleClickOnclick() {
    // console.log(this.props.wordings);
    this.setState({
      isLike: !this.state.isLike,
    });
  }
  render() {
    return <button onClick={this.handleClickOnclick.bind(this)}>{this.state.isLike ? this.props.likedText : this.props.unlikeText}</button>;
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
        <IndexT></IndexT>
        <List></List>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
