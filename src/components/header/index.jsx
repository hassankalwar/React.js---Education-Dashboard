import React from 'react';

import SchoolIcon from '@material-ui/icons/School';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PublicIcon from '@material-ui/icons/Public';

import avatar from '../../assets/1.png';

const header = () => {
  return (
    <div className="header flex">
      <SchoolIcon style={{ fontSize: 50 }} />
      <h3>Welcome To Advorb School Management System</h3>
      <div>
        <input
          type="text"
          className="search-field"
          placeholder="Search Here..."
        />
        <i className="curser">
          <SearchIcon style={{ fontSize: 18 }} />
        </i>
      </div>
      <div className="icon-wrapper flex">
        <PublicIcon className="mail-icon" />
        <div className="user-info flex">
          <p>English</p>
          <ArrowForwardIosIcon className={`arrow`} style={{ fontSize: 11 }} />
        </div>
      </div>
      <Divider orientation="vertical" flexItem className="divider" />
      <div className="icon-wrapper">
        <MailOutlineIcon className="mail-icon" />
        <NotificationsIcon className="mail-icon" />
      </div>
      <Divider orientation="vertical" flexItem className="divider" />
      <div className="flex">
        <Avatar alt="Remy Sharp" src={avatar} />
        <div className=" user-info-wrapper">
          <div className="user-info flex">
            <p>Faraz Ahmed</p>
            <ArrowForwardIosIcon className={`arrow`} style={{ fontSize: 11 }} />
          </div>
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default header;
