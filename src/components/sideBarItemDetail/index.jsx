import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const SideBarItemDeatil = ({ name }) => {
  return (
    <div className="dropdown flex">
      <ArrowForwardIosIcon className="arrow" style={{ fontSize: 10 }} />
      <h6>{name}</h6>
    </div>
  );
};

export default SideBarItemDeatil;
