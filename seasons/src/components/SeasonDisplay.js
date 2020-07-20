import React from 'react';
import '../assets/styles/SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Wow, much hot!',
    icon: 'massive sun icon'
  },
  winter: {
    text: 'Bruh, too cold!',
    icon: 'massive snoflake icon'
  },
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

export default function SeasonDisplay(props) {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`left ${icon}`}></i>
      <h1>{text}</h1>
      <i className={`right ${icon}`}></i>
    </div>
  );
}
