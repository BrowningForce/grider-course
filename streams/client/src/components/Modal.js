import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <h2 className='header'>{props.title}</h2>
        <div className='content'>
          <p>{props.body}</p>
        </div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
