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
  const currentArticleId = useSelector(
    (state: any) => state.articleReducers.currentArticle
  );
  const { comments, content, tagList } = articlesMeta.filter(
    (article: Article) => article.articleId === id
  )[0];
  return (
    <div>
      <ArticleBanner id={id} articlesMeta={articlesMeta} />
      <ArticleContent
        body={content}
        comments={comments}
        id={currentArticleId}
        tagList={tagList}
      />
    </div>
  );
};
