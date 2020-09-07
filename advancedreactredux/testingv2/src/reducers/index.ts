import { combineReducers } from 'redux';
import commentsReducer from 'app/commentsSlice';

export default combineReducers({
  comments: commentsReducer,
});
