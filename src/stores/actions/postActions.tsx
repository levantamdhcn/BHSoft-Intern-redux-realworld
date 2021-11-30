import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"
import { RootState } from "../stores"
import { getPost } from '../../axios/index'
import { GET_POST } from "./type"

export const getPostAction = () => async(dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
        const response = await getPost()
        const data = response.data
        dispatch({
            type: GET_POST,
            payload: data.articles
        })
    } catch (error) {
        console.log(error)
    }
}