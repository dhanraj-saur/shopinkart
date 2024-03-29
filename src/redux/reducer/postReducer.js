import { POST_FETCHING, POST_FETCH_SUCCESS, POST_FETCH_ERROR } from "../action/actionTypes";

let initialState = {
    loading: false,
    data: [],
    error: null
}

const postReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case POST_FETCHING:
            return { ...state, loading: true }
        case POST_FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case POST_FETCH_ERROR:
            return { ...state, loading: false, data: [], error: action.payload }
        default:
            return state;
    }
}
export default postReducer