import { Dispatch } from "react";
import { Article, ArticleAction } from "../type";
import { ADD_ARTICLE } from "./constant";

export const addArtilce =
  (data: Article) => (dispatch: Dispatch<ArticleAction>) => {
    return dispatch({
      type: ADD_ARTICLE,
      payload: {
        currentArticle: data.articleId,
        article: data,
      },
    });
  };
