import { Button, Card } from "antd";
import { HeartFilled } from "@ant-design/icons";
import React from "react";
import { Post as PostType } from "../../stores/type";
import { useDispatch } from "react-redux";
import { goArticle } from "../../stores/actions/articleActions";
import { toggleFavourite } from "../../stores/actions/articleActions";
import { Link } from "react-router-dom";

interface PostProps {
  post: PostType;
  linkToProfile: string;
}

const Post = (props: PostProps) => {
  const {
    title,
    author,
    tagList,
    createdAt,
    description,
    id,
    favoritesCount,
    favorited,
    slug,
  } = props.post;
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(goArticle(id, slug));
  };
  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(slug, id));
  };
  return (
    <div>
      <Card
        style={{
          marginTop: 16,
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
        className="post-container"
      >
        <div className="post-meta">
          <Link to={props.linkToProfile} className="post-article">
            <img src={author?.image} alt="avatar" />
          </Link>
          <div className="infor">
            <Link to={props.linkToProfile} className="author">
              {author?.username}
            </Link>
            <span className="date">{createdAt}</span>
          </div>
          <div className="post-react">
            <Button
              className={
                favorited ? "ant-btn btn-primary active" : "ant-btn btn-primary"
              }
              onClick={handleToggleFavourite}
            >
              <HeartFilled />
              {favoritesCount}
            </Button>
          </div>
        </div>
        <Link
          to={id ? `/article/${id}` : `/post/${slug}`}
          className="post-preview"
          onClick={() => handleOnClick()}
        >
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="post-footer">
            <span>Read more...</span>
            <ul className="tag-list">
              {Array.isArray(tagList) ? (
                tagList?.map((tag) => (
                  <li className="tag-item" key={tag}>
                    {tag}
                  </li>
                ))
              ) : (
                <li key={tagList} className="tag-item">
                  {tagList}
                </li>
              )}
            </ul>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default Post;
