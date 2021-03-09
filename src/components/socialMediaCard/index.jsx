import React from 'react';
import Divider from '@material-ui/core/Divider';

const SocialCard = ({ name, children, number, text, statement }) => {
  return (
    <div
      className={`social-card-wrapper flex ${
        name === 'facebook'
          ? 'facebook'
          : name === 'google'
          ? 'google'
          : name === 'twitter'
          ? 'twitter'
          : 'linkedin'
      }`}
    >
      <div className={`icon-wrapper`}>
        {children}
        <p>{text}</p>
        <p>{statement}</p>
      </div>
      <Divider orientation="vertical" className="divider" />
      <div className="info flex">
        <h1>{number}</h1>
      </div>
    </div>
  );
};

export default SocialCard;
