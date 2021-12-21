import axios from "axios";
import { CommentData } from "../stores/actions/articleActions";
import { Article } from "../stores/type";

const route = "articles";

export const getAllArticles = () => axios.get(`/${route}/get/all`);
export const getArticleById = (id: string) => axios.get(`/${route}/get/${id}`);

export const createArtilce = (article: Article) =>
  axios.post(`/${route}/`, {
    title: article.title,
    desc: article.desc,
    body: article.body,
    comments: [],
    tagList: article.tagList,
    author: article.author,
    favoritesCount: 0,
    favorited: [],
  });
export const updateArticle = (id: string, data: Article) =>
  axios.put(`/${route}/${id}`, {
    title: data.title,
    desc: data.desc,
    body: data.body,
    tagList: data.tagList,
  });

export const deleteArticle = (id: string) => axios.delete(`/${route}/${id}`);

export const createComment = (id: string, data: CommentData) =>
  axios.post(`/${route}/${id}/comment`, {
    body: data.body,
    author: data.author,
    createdAt: data.createdAt,
  });
export const deleteComment = (id: string, commentId: string) =>
  axios.delete(`/${route}/${id}/comment/${commentId}`);
export const toggleFavorite = (artilceId: string, userId: string) =>
  axios.put(`/${route}/${artilceId}/favorite`, {
    id: userId,
  });
