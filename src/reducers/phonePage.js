import R from 'ramda'

import {FETCH_PHONE_BY_ID_SUCCESS} from "../constants/actionTypes";

const initial_state = {
    id: null
};

export default (state = initial_state, {type, payload}) => {
    switch (type) {
        case FETCH_PHONE_BY_ID_SUCCESS:
            return R.merge(state, {
                id: R.prop('id', payload)
            });
        default:
            return state
    }
}