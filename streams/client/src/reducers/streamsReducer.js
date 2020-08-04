import * as types from '../actions/types';
import _ from 'lodash';

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_STREAMS:
        return { ...state, ..._.mapKeys(action.payload, 'id') };
    case types.CREATE_STREAM:
        return { ...state, [action.payload.id]: action.payload };
    case types.FETCH_ONE_STREAM:
        return { ...state, [action.payload.id]: action.payload };
    case types.UPDATE_STREAM:
        return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_STREAM:
        return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamsReducer;