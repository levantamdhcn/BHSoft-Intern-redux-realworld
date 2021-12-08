import { Dispatch } from "react";
import { action, Article, ArticleAction, CommentState } from "../type";
import {
  ADD_ARTICLE,
  ADD_COMMENT,
  DEL_ARTICLE,
  DEL_COMMENT,
  GO_ARTICLE,
  UPDATE_ARTICLE,
} from "../constant";

export const addArtilce =
  (data: Article) => (dispatch: Dispatch<ArticleAction>) => {
    const articleData = { ...data, comments: [] };
    return dispatch({
      type: ADD_ARTICLE,
      payload: {
        currentArticle: data.articleId,
        article: articleData,
      },
    });
  };
export const goArticle =
  (id: string, slug?: string) => (dispatch: Dispatch<ArticleAction>) => {
    return dispatch({
      type: GO_ARTICLE,
      payload: {
        currentArticle: id,
        currentPostSlug: slug,
      },
    });
  };
export const updateArticle =
  (data: Article) => (dispatch: Dispatch<ArticleAction>) => {
    dispatch({
      type: UPDATE_ARTICLE,
      payload: data,
    });
  };
export const deleteArticle =
  (articleId: string) => (dispatch: Dispatch<ArticleAction>) => {
    dispatch({
      type: DEL_ARTICLE,
      payload: articleId,
    });
  };
export const addComment =
  (id: string, data: CommentState) => (dispatch: Dispatch<action>) => {
    dispatch({
      type: ADD_COMMENT,
      payload: {
        id,
        data,
      },
    });
  };
export const deleteComment = (id: string) => (dispatch: Dispatch<action>) => {
  dispatch({
    type: DEL_COMMENT,
    payload: id,
  });
};
