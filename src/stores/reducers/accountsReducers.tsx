import { ADD_FOLLOW } from "../actions/constant";
import { action } from "../type";

const initialState = {
  following: false,
};

const articleReducers = (state = initialState, action: action) => {
  switch (action.type) {
    case ADD_FOLLOW:
      return {
        ...state,
        following: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducers;
