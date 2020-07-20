import React from 'react';

export default function Loader(props) {
  return (
    <div class='ui active dimmer'>
      <div class='ui huge text loader'>{props.text}</div>
    </div>
  );
}

Loader.defaultProps = {
  message: 'Loading...',
};
