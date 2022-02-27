import React, { Component } from "react";
class CommentList extends Component {
  static defaultProps = {
    comments: [],
  };
  constructor() {
    super();
  }
  deleteComment(key) {
    console.log(key);
    this.props.onDelete(key);
  }
  render() {
    // const comments = this.comments || [];
    //   通过props获取数据
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return (
            <div className="comment-li" key={i}>
              <div style={{ flex: 1, marginBottom: "10px" }}>
                <span>{comment.username}:</span>
                {comment.content}
              </div>
              <span onClick={this.deleteComment.bind(this, i)} style={{ width: "50px", cursor: "pointer" }}>
                ❌
              </span>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CommentList;
