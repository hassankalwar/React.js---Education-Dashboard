import React from 'react';

const NumberCard = ({ children, number, statement, name }) => {
  return (
    <div className="number-card-wrapper flex">
      <div
        className={`icon-wrapper flex ${
          name === 'parent'
            ? 'parent'
            : name === 'teacher'
            ? 'teacher'
            : name === 'student'
            ? 'student'
            : 'earning'
        }`}
      >
        {children}
      </div>
      <div className="info flex">
        <h1>{number}</h1>
        <p>{statement}</p>
      </div>
    </div>
  );
};

export default NumberCard;
