import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, Divider, Typography } from '@material-ui/core';

import Comment from 'components/Comment';
import { IComment } from 'types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      marginTop: '1.5rem',
    },
  })
);

const CommentList: React.FC = () => {
  const classes = useStyles();
  const state = useSelector((state: IComment[]) => state);
  const [comments, setComments] = useState(state);

  useEffect(() => {
    setComments(state);
  }, [state]);

  const renderComments = (comments: IComment[]) => {
    if (comments.length > 0) {
      return comments.map((comment, index, array) => {
        if (index === array.length - 1) {
          return <Comment key={comment.id} text={comment.text} />;
        }

        return (
          <>
            <Comment key={comment.id} text={comment.text} />
            <Divider variant='inset' component='li' />
          </>
        );
      });
    } else {
      return (
        <Typography component='h5'>There is nothing to show yet!</Typography>
      );
    }
  };

  return <List className={classes.root}>{renderComments(comments)}</List>;
};

export default CommentList;
