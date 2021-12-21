import { Dispatch } from "react";
import { action, User } from "../type";
import { ADD_FOLLOW, UN_FOLLOW, UPDATE_ACCOUNT_FAIL } from "../constants/";
import { follow, unFollow, updateUser } from "../../axios/userApis";
import { History } from "history"
import { UPDATE_ACCOUNT_SUCCESS } from "../constants/authConstants";
export const updateAccount = (data: User, history: History) => (dispatch: Dispatch<action>) => {
  updateUser(data)
  .then((response) => {
    dispatch({
      type: UPDATE_ACCOUNT_SUCCESS,
      payload: data
    })
    history.push(`/profile/${data.username}`)
  })
  .catch((error) => {
    dispatch({
      type: UPDATE_ACCOUNT_FAIL
    })
  })
}
export const addFollow = (toId: string, fromId: string) => (dispatch: Dispatch<action>) => {
    follow(toId,fromId).then((response) => {
    dispatch({
      type: ADD_FOLLOW,
      payload: response.data.id
    })
  })
};

export const removeFollow = (id: string) => (dispatch: Dispatch<action>) => {
    unFollow(id)
    dispatch({
      type: UN_FOLLOW,
      payload: id
    })
};
