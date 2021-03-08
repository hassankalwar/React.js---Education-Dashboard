import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const SideBarItem = ({ name, children, arrowDown, active, clicked }) => {
  return (
    <div className={`side-bar-item flex curser ${active}`} onClick={clicked}>
      <div className="flex">
        <i>{children}</i>
        <h5>{name}</h5>
      </div>
      <ArrowForwardIosIcon
        className={`arrow ${arrowDown}`}
        style={{ fontSize: 11 }}
      />
    </div>
  );
};

export default SideBarItem;
