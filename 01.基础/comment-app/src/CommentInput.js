import React from "react";
// rcc rfc
export default function CommentInput() {
  return (
    <div className="comment-input">
      <div className="comment-field">
        <span className="comment-field-name">用户名：</span>
        <div className="comment-field-input">
          <input type="text" />
        </div>
      </div>
      {/* okk  评论区域 */}
      <div className="comment-field">
        <span className="comment-field-name">评论内容：</span>
        <div className="comment-field-input">
          <textarea name="comment" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      {/* 发布按钮 */}
      <div className="commnet-field-button">
        <button>发布</button>
      </div>
    </div>
  );
}
