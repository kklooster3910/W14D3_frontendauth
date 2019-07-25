import {
    RECEIVE_USER, RECEIVE_SESSION_ERRORS
} from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
                return merge({}, defaultState);
        case RECEIVE_SESSION_ERRORS:
                return merge({}, state, action.errors);
        default:
            return state;
    }
}