import { GET_POST, GO_ARTICLE, TOGGLE_FAVOURITE } from "../actions/constant";
import { action, Post, PostState } from "../type";

const initialState: PostState = {
  currentPostSlug: "Create-a-new-implementation-1",
  posts: [],
};

const postReducers = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_POST:
      let newState = action.payload.slice(0);
      return {
        ...state,
        posts: newState,
      };
    case TOGGLE_FAVOURITE:
      const postNeedToggle = state.posts.map((item: Post) => {
        if (item.slug === action.payload) {
          return {
            ...item,
            favoritesCount: item.favorited
              ? item.favoritesCount - 1
              : item.favoritesCount + 1,
            favorited: !item.favorited,
          };
        }
        return item;
      });
      return {
        ...state,
        posts: postNeedToggle,
      };
    case GO_ARTICLE:
      return {
        ...state,
        currentPostSlug: action.payload.currentPostSlug,
      };
    default:
      return state;
  }
};

export default postReducers;
