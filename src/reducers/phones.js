import R from 'ramda'

import {
    FETCH_PHONES_SUCCESS
} from "../constants/actionTypes";

const initial_state = {};

export default (state = initial_state, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValues);
        default:
            return state
    }
}