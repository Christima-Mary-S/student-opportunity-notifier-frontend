import { GET_ERRORS } from "../actions/actionTypes.js";

const initialState = { errors: {} };

const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS: return {
            ...state,
            errors: action.payload
        };
        default: return state;
    }
}

export default errorsReducer;