import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from 'app/commentsSlice';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button, TextField, FormControl } from '@material-ui/core';
import { nanoid } from '@reduxjs/toolkit';
import { IComment } from 'types';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '50%',
      justifyContent: 'center',
    },
  })
);

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const newComment: IComment = {
      id: nanoid(),
      text: comment,
    };

    dispatch(addComment(newComment));
    setComment('');
  };

  const classes = useStyles();
  return (
    <FormControl
      onSubmit={handleSubmit}
      component='form'
      className={classes.root}
    >
      <TextField
        multiline
        label='Your Comment'
        name='comment-input-field'
        id='comment-input-field'
        rows={3}
        variant='outlined'
        onChange={handleInputChange}
        value={comment}
      />
      <Button variant='contained' type='submit'>
        Leave Comment
      </Button>
    </FormControl>
  );
};

export default CommentBox;
