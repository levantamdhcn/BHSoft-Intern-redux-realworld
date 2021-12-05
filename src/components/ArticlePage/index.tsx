import React from "react";
import { ArticleBanner } from "./ArticleBanner";
import { ArticleContent } from "./ArticleContent";

interface ArticlePageProps {
  id: string;
}

export const ArticlePage = ({ id }: ArticlePageProps) => {
  return (
    <div>
      <ArticleBanner id={id} />
      <ArticleContent />
    </div>
  );
};
