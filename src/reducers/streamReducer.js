import _ from "lodash";
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            //Use mapkeys to get the array of objects and map it all into an object with ids as the key.
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload}; //return single records
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};