import { GET_ERRORS, CLEAR_ERRORS } from "../actions/actionTypes.js";

const initialState = { errors: {} };

const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS: return {
            ...state,
            errors: action.payload
        };
        case CLEAR_ERRORS: return initialState;
        default: return state;
    }
}

export default errorsReducer;