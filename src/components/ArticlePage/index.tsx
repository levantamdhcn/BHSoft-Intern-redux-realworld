import React from "react";
import { useSelector } from "react-redux";
import { Article } from "../../stores/type";
import { ArticleBanner } from "./ArticleBanner";
import { ArticleContent } from "./ArticleContent";

interface ArticlePageProps {
  id: string;
}

export const ArticlePage = ({ id }: ArticlePageProps) => {
  const articlesMeta = useSelector(
    (state: any) => state.articleReducers.articles
  );
  const comments = articlesMeta.filter(
    (article: Article) => article.articleId === id
  )[0].comments;
  const currentArticleId = useSelector(
    (state: any) => state.articleReducers.currentArticle
  );
  return (
    <div>
      <ArticleBanner id={id} articlesMeta={articlesMeta} />
      <ArticleContent comments={comments} id={currentArticleId} />
    </div>
  );
};
