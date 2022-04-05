import produce from "immer";
import { GET_USERS, DELETE_USER } from "../actions/actionTypes";

const initialState = { users: [] };

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: return {
            ...state,
            users: action.payload
        };
        case DELETE_USER: return produce(state, draft => {
            draft.users = draft.users.filter(user => user.username !== action.payload);
        });
        default: return state;
    }
}

export default adminReducer;