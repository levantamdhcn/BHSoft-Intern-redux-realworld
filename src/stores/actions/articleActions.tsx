import { Dispatch } from "react";
import { action, Article, ArticleAction } from "../type";
import {
  ADD_ARTICLE,
  ADD_COMMENT,
  DEL_ARTICLE,
  DEL_COMMENT,
  UPDATE_ARTICLE,
} from "../constants";
import { getAllArticles,createArtilce, updateArticle, deleteArticle, createComment, deleteComment, toggleFavorite } from "../../axios/articlesApis";
import { GET_ARTICLE, TOGGLE_FAVORITE } from "../constants/articleContants";
import { History } from "history"

export interface CommentData {
  body: string
  author: {
    username: string
    image: string
    bio: string
  }
  createdAt: string
}

export const getArticle = async (dispatch: Dispatch<action>) => {
  const response = await getAllArticles()
  dispatch({
    type: GET_ARTICLE,
    payload: response.data.articles
  })
}

export const addArtilce =
  (data: Article, history: History) => async (dispatch: Dispatch<ArticleAction>) => {
    const response = await createArtilce(data)
    dispatch({
      type: ADD_ARTICLE,
      payload: {
        currentArticle: data._id,
        article: response.data,
      },
    });
    history.push(`/article/${response.data._id}`)
  };
export const updateArticleAction =
  (id: string, data: Article, history: History) => async (dispatch: Dispatch<ArticleAction>) => {
    const response = await updateArticle(id,data)
    dispatch({
      type: UPDATE_ARTICLE,
      payload: response.data,
    });
    history.push(`/article/${id}`)
  };
export const deleteArticleAction =
  (articleId: string, history: History) => async (dispatch: Dispatch<ArticleAction>) => {
    const response = await deleteArticle(articleId)
    dispatch({
      type: DEL_ARTICLE,
      payload: response.data,
    });
    history.push("/")
  };
export const addComment =
  (id: string, data: CommentData, history: History) => async (dispatch: Dispatch<action>) => {
    await createComment(id, data)
    dispatch({
      type: ADD_COMMENT,
      payload: {
        id,
        data: data
      },
    });
    history.push(`/article/${id}`)
  };
export const deleteCommentAction = (articleId: string, commentId: string,history: History) => async (dispatch: Dispatch<action>) => {
  deleteComment(articleId, commentId)
  dispatch({
    type: DEL_COMMENT,
    payload: {
      articleId,
      commentId
    }
  });
  history.push(`/article/${articleId}`)
};

export const toggleFavoriteAction = (articleId: string, userId: string) => async (dispatch: Dispatch<action>) => {
  await toggleFavorite(articleId, userId)
  dispatch({
    type: TOGGLE_FAVORITE,
    payload: {
      articleId,
      userId
    }
  })
}