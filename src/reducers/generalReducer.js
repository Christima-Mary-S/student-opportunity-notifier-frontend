import { GET_LATEST_ARTICLES } from "../actions/actionTypes.js";

const initialState = {
    articles: []
}

const generalReducer = (state = initialState, action) => {// state consists of posts here 
    switch (action.type) {
        case GET_LATEST_ARTICLES: return action.payload;
        default: return state;
    }
}

export default generalReducer;
