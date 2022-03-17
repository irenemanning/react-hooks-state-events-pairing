import React from "react";
import Comment from "./Comment";

function Comments({ comments }) {
  const commentList = comments.map((comment) => <Comment comment={comment} />);

  return (
    <div>
      <h3>{comments.length} Comments</h3>
      {commentList}
    </div>
  );
}

export default Comments;
