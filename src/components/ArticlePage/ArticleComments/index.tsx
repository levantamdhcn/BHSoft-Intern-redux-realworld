import { useSelector } from "react-redux";
import { CommentState } from "../../../stores/type";
import { Comment } from "./Comment";

interface ArticleCommentsProps {
  id: string,
}

export const ArticleComments = ({ id }: ArticleCommentsProps) => {
  const comments = useSelector((state: any) => state.articleReducers.articles.filter((el: any) => el._id === id)[0].comments)
  return (
    <div>
      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {comments?.length > 0
          ? comments?.slice(0).reverse().map((comment: CommentState) => (
              <li key={comment.commentId}>
                <Comment
                  articleId={id}
                  body={comment.body}
                  image={comment.author.image}
                  username={comment.author.username}
                  createdAt={comment.createdAt}
                  id={comment.commentId}
                />
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};
