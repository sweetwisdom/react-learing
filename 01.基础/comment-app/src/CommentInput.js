// rcc rfc

import React, { Component } from "react";

export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "zc",
      content: "欢迎",
    };
  }
  // 修改usrname
  handleUsernameChange(event) {
    // console.log(this);
    this.setState({
      username: event.target.value,
    });
  }
  // 修改评论
  handleContentChange(event) {
    // console.log(this);
    this.setState({
      content: event.target.value,
    });
  }
  // 提交数据
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
    }
    console.log("开始提交数据");
    this.setState({ content: "" });
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} type="text" />
          </div>
        </div>
        {/* okk  评论区域 */}
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} name="comment" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        {/* 发布按钮 */}
        <div className="commnet-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}
