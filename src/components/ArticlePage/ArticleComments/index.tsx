import React from "react";
import { Comment } from "./Comment";

interface ArticleCommentsProps {
  comments: [];
}

interface CommentState {
  author: {
    image: string;
    username: string;
  };
  body: string;
  createdAt: string;
  id: string;
  updatedAt: string;
}

export const ArticleComments = ({ comments }: ArticleCommentsProps) => {
  return (
    <div>
      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {comments?.length > 0
          ? comments?.map((comment: CommentState) => (
              <li key={comment.id}>
                <Comment
                  body={comment.body}
                  image={comment.author.image}
                  username={comment.author.username}
                  createdAt={comment.createdAt}
                />
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};
