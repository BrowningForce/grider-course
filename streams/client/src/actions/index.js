import * as types from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({
    type: types.FETCH_STREAMS,
    payload: response.data,
  });
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({
    type: types.CREATE_STREAM,
    payload: response.data,
  });

  history.push('/');
};

export const fetchOneStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: types.FETCH_ONE_STREAM,
    payload: response.data,
  });
};

export const updateStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({
    type: types.UPDATE_STREAM,
    payload: response.data,
  });

  history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  history.push('/');

  dispatch({
    type: types.DELETE_STREAM,
    payload: id,
  });
};
