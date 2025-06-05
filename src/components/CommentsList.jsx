import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments, level = 0 }) => {
  return (
    <div style={{ marginLeft: `${level * 20}px` }}>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {comment.replies?.length > 0 && (
            <div className="border-l border-gray-300 pl-4">
              <CommentsList comments={comment.replies} level={level + 1} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
