import {
  ADD_ARTICLE,
  DEL_ARTICLE,
  GO_ARTICLE,
  UPDATE_ARTICLE,
} from "../actions/constant";
import { ArticleState, ArticleAction } from "../type";

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
      return state;
    case DEL_ARTICLE:
      return state;
    default:
      return state;
  }
};

export default articleReducers;
