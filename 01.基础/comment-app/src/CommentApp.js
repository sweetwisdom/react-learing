import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        { username: "Jerry", content: "Hello" },
        { username: "Tomy", content: "World" },
      ],
    };
  }
  handleDelete(key) {
    console.log("shanchu", key);
    this.state.comments.splice(key, 1);
    this.setState({
      comments: this.state.comments,
    });
  }
  handleSubmitCommet(comment) {
    console.log(comment);
    this.state.comments.push(comment);
    this.setState({
      comments: this.state.comments,
    });
    console.log(this.state.comments);
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitCommet.bind(this)} />
        <CommentList onDelete={this.handleDelete.bind(this)} comments={this.state.comments} />
      </div>
    );
  }
}
export default CommentApp;
