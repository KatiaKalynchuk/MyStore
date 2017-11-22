import R from 'ramda'

import {
    FETCH_PHONES_SUCCESS
} from "../constants/actionTypes";

const initial_state = {
    ids: []
};

export default (state = initial_state, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            });
        default:
            return state
    }
}