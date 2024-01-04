import { POST_FETCHING, POST_FETCH_SUCCESS, POST_FETCH_ERROR } from "./actionTypes";
import axios from "axios";

export const postFetching = () => {
    return {
        type: POST_FETCHING
    }
}
export const postFetchingSuccess = (data) => {
    return {
        type: POST_FETCH_SUCCESS,
        payload: data
    }
}
export const postFetchingError = (error) => {
    return {
        type: POST_FETCH_ERROR,
        payload: error
    }
}

export const fetchingData = () => {
    return function (dispatch) {
      
        dispatch(postFetching())
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                dispatch(postFetchingSuccess(response.data))
                
            })
            .catch((err) => {
                dispatch(postFetchingError(err.message))
            })
    }
}