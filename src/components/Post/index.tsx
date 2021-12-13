import { Card } from "antd";
import { HeartFilled } from "@ant-design/icons";
import React from "react";
import { Post as PostType } from "../../stores/type";
import { useDispatch } from "react-redux";
import { goArticle } from "../../stores/actions/articleActions";
import { toggleFavourite } from "../../stores/actions/articleActions";
import { Link } from "react-router-dom";
import { StyledButton } from "../styled/Button.styled";
import { PostItem, PostMeta } from "../styled/Post.styled";
import { TagItem, TagList } from "../styled/TagsHolder.styled";

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
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <PostItem>
          <PostMeta className="post-meta">
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
              <StyledButton
                status={favorited ? "primary-active" : "primary"}
                onClick={handleToggleFavourite}
              >
                <HeartFilled />
                {favoritesCount}
              </StyledButton>
            </div>
          </PostMeta>
          <Link
            to={id ? `/article/${id}` : `/post/${slug}`}
            className="post-preview"
            onClick={() => handleOnClick()}
          >
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="post-footer">
              <span>Read more...</span>
              <TagList>
                {Array.isArray(tagList) ? (
                  tagList?.map((tag) => <TagItem key={tag}>{tag}</TagItem>)
                ) : (
                  <TagItem key={tagList}>{tagList}</TagItem>
                )}
              </TagList>
            </div>
          </Link>
        </PostItem>
      </Card>
    </div>
  );
};

export default Post;
