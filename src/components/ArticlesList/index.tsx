import React from "react";
import { Articles, Article } from "../../stores/type";
import Post from "../Post";
import { PostItem, PostList } from "../styled/Post.styled";

interface Props {
  articles: Articles;
}

export const ArticlesList = ({ articles }: Props) => {
  return (
    <PostList className="post-list">
      {articles.map((item: Article, index: number) => {
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
            <Post post={post} linkToProfile={`/profile/${item.author.username}`} />
          </PostItem>
        );
      })}
    </PostList>
  );
};
