import React, { useState } from 'react';
import WidgetItem from './WidgetItem';

const Accordion = ({ data }) => {
  const [active, setActive] = useState(null);
  const onTitleClicked = (index) => {
    setActive(index);
  };

  const renderedList = data.map((item, index) => {
    const props = {
      item,
      index,
      onClick: onTitleClicked,
      isActive: active === index,
    };
    return <WidgetItem key={index} {...props} />;
  });

  return <div className='ui accordion'>{renderedList}</div>;
};

export default Accordion;
