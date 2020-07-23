import React from 'react';

const WidgetItem = ({ item, isActive, onClick, index }) => {
    const active = isActive ? 'active' : '';
  return (
    <div className='ui segment'>
      <div className={`title ${active}`} onClick={() => onClick(index)}>
        <i className='dropdown icon'></i>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default WidgetItem;
