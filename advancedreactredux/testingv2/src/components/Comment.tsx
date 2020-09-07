import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

interface Props {
  text: string
}

const Comment: React.FC<Props> = ({ text }) => {
  return (
    <ListItem alignItems='flex-start'>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default Comment;
