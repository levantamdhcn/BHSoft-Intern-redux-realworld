import { Button, Card } from "antd";
import { HeartFilled } from "@ant-design/icons";
import React from "react";
import { Post as PostType } from "../../../stores/type";
import { useDispatch } from "react-redux";
import { goArticle } from "../../../stores/actions/articleActions";
import { toggleFavourite } from "../../../stores/actions/postActions";

const Post = (props: PostType) => {
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
  } = props;
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
          <a href="#@user" className="post-article">
            <img src={author?.image} alt="avatar" />
          </a>
          <div className="infor">
            <a href="#@user" className="author">
              {author?.username}
            </a>
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
        <a
          href={id ? `/article/${id}` : `/post/${slug}`}
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
                <li key={tagList}>{tagList}</li>
              )}
            </ul>
          </div>
        </a>
      </Card>
    </div>
  );
};

export default Post;
