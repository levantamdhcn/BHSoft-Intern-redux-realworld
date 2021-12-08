import React from "react";
import { getUserInforById } from "../../localStorage";
import { Articles, Article } from "../../stores/type";
import Post from "../Post";

interface Props {
  articles: Articles;
}

export const ArticlesList = ({ articles }: Props) => {
  return (
    <ul className="post-list">
      {articles.map((item: Article, index: number) => {
        const author = {
          username: getUserInforById(item.userId)[0].username,
          image: getUserInforById(item.userId)[0].image,
        };
        const post = {
          title: item.title,
          author: author,
          tagList: item.tagList,
          createdAt: item.createdAt,
          description: item.desc,
          id: item.articleId,
          favoritesCount: item.favoritesCount,
          favorited: item.favorited,
          comments: [],
        };
        return (
          <li key={index}>
            <Post post={post} linkToProfile={`/profile/${author.username}`} />
          </li>
        );
      })}
    </ul>
  );
};
