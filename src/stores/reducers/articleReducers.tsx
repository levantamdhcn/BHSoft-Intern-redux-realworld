import {
  ADD_ARTICLE,
  ADD_COMMENT,
  DEL_ARTICLE,
  DEL_COMMENT,
  GO_ARTICLE,
  UPDATE_ARTICLE,
} from "../actions/constant";
import { ArticleState, ArticleAction, Article } from "../type";

const initialState: ArticleState = {
  currentArticle: "",
  articles: [],
};

const articleReducers = (
  state: ArticleState = initialState,
  action: ArticleAction
) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        currentArticle: action.payload.currentArticle,
        articles: state.articles.concat(action.payload.article),
      };
    case GO_ARTICLE:
      return {
        ...state,
        currentArticle: action.payload.currentArticle,
      };
    case UPDATE_ARTICLE:
      const articlesAfterUpdate = state.articles.map((item: Article) => {
        if (item.articleId === state.currentArticle) {
          const { title, desc, content, tag } = action.payload;
          return {
            ...item,
            title,
            desc,
            content,
            tag,
          };
        }
        return item;
      });
      return {
        ...state,
        articles: articlesAfterUpdate,
      };
    case DEL_ARTICLE:
      const articlesAfterDel = state.articles.filter(
        (item: Article) => item.articleId !== action.payload
      );
      return { ...state, articles: articlesAfterDel };
    case ADD_COMMENT:
      const articlesAfterAddCmt = state.articles.map((article: Article) => {
        if (article.articleId === action.payload.id) {
          return {
            ...article,
            comments: [action.payload.data].concat(article.comments),
          };
        }
        return article;
      });
      return {
        ...state,
        articles: articlesAfterAddCmt,
      };
    case DEL_COMMENT:
      const articleAfterDelCmt = state.articles.map((item: Article) => {
        if (item.articleId === state.currentArticle) {
          return {
            ...item,
            comments: item.comments.filter(
              (comment) => comment.id !== action.payload
            ),
          };
        }
        return item;
      });
      return {
        ...state,
        articles: articleAfterDelCmt,
      };
    default:
      return state;
  }
};

export default articleReducers;
