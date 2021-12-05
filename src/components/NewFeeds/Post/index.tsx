import { Button, Card } from "antd";
import { HeartFilled } from "@ant-design/icons";
import React from "react";
import { Post as PostType } from "../../../stores/type";

const Post = (props: PostType) => {
  const { title, author, tag, createdAt, description, id } = props;
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
            <Button className="btn btn-primary">
              <HeartFilled />
              53
            </Button>
          </div>
        </div>
        <a href={`/article/${id}`} className="post-preview">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="post-footer">
            <span>Read more...</span>
            <ul className="tag-list">
              <li className="tag-item">{tag}</li>
            </ul>
          </div>
        </a>
      </Card>
    </div>
  );
};

export default Post;
