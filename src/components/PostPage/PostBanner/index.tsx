import React from "react";
import { Post, Posts } from "../../../stores/type";

interface PostBannerProps {
  slug: string;
  postMeta: Posts;
}

export const PostBanner = ({ slug, postMeta }: PostBannerProps) => {
  const postInfo = postMeta.filter((item: Post) => item.slug === slug);

  return (
    <div>
      <div className="banner article-banner">
        <div className="container small-container">
          <h1 className="article-title">{postInfo[0].title}</h1>
          <div className="post-meta">
            <a href="#@user" className="post-article">
              <img src={postInfo[0].author.image} alt="avatar" />
            </a>
            <div className="infor article-infor">
              <a href="#@user" className="author artilce-author">
                {postInfo[0].author.username}
              </a>
              <span className="date">
                {postInfo[0].createdAt?.split("T")[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
