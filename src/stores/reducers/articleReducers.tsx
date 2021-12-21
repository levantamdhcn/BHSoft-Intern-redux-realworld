import { 
  ADD_ARTICLE, 
  ADD_COMMENT, 
  DEL_ARTICLE, 
  DEL_COMMENT, 
  GET_ARTICLE, 
  TOGGLE_FAVORITE, 
  UPDATE_ARTICLE 
} from "../constants/articleContants";
import { ArticleState, ArticleAction, Article } from "../type";

const initialState: ArticleState = {
  isLoading: true,
  articles: [],
};

const articleReducers = (
  state: ArticleState = initialState,
  action: ArticleAction
) => {
  switch (action.type) {
    case GET_ARTICLE: 
    return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };
    case ADD_ARTICLE:
      return {
        ...state,
        currentArticle: action.payload.currentArticle,
        articles: state.articles.concat(action.payload),
      };
    case UPDATE_ARTICLE:
      const articlesAfterUpdate = state.articles.map((item: Article) => {
        if (item._id === action.payload.id) {
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
        (item: Article) => item._id !== action.payload
      );
      return { ...state, articles: articlesAfterDel };
    case ADD_COMMENT:
      const articlesAfterAddCmt = state.articles.map((article: Article) => {
        if (article._id === action.payload.id) {
          return {
            ...article,
            comments: article.comments.concat(action.payload.data),
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
        if (item._id === action.payload.articleId) {
          return {
            ...item,
            comments: item.comments.filter(
              (comment) => comment.commentId !== action.payload.commentId
            ),
          };
        }
        return item;
      });
      console.log('a',action.payload)
      return {
        ...state,
        articles: articleAfterDelCmt,
      };
    case TOGGLE_FAVORITE:
      const articlesNeedToggle = state.articles.map((item: Article) => {
        if (item._id === action.payload.articleId) {
          console.log(action.payload.articleId)
          const isFavorited = item.favorited.includes(action.payload.userId)
          return {
            ...item,
            favoritesCount: isFavorited ? item.favoritesCount - 1 : item.favoritesCount + 1,
            favorited: isFavorited ? item.favorited.filter(el => el !== action.payload.userId) : item.favorited.concat(action.payload.userId)
          };
        }
        return item;
      });
      return {
        ...state,
        articles: articlesNeedToggle,
      };
    default:
      return state;
  }
};

export default articleReducers;
