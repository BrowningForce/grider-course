import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment, IState } from 'types';

const initialState: IComment[] = [];

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state: IState, action: PayloadAction<IComment>) => {
      state.push(action.payload)
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
