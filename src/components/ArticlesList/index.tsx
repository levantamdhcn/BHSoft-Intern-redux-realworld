import React from "react";
import { Articles, Article } from "../../type";
import Post from "../PostList/Post";
import { PostItem, PostList } from "../../styled/Post.styled";

interface Props {
  articles: Articles;
}

export const ArticlesList = ({ articles }: Props) => {
  return (
    <PostList className="post-list">
      {articles ? articles.map((item: Article, index: number) => {
        const post = {
          title: item.title,
          author: item.author,
          tagList: item.tagList,
          createdAt: item.createdAt,
          description: item.desc,
          id: item._id,
          favoritesCount: item.favoritesCount,
          favorited: item.favorited,
          comments: [],
        };
        return (
          <PostItem key={index}>
            <Post post={post} linkToProfile={`/profile/${item.author ? item.author.username : ""}`} />
          </PostItem>
        );
      }) : ""}
    </PostList>
  );
};
