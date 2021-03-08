import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import SideBarItem from '../sideBarItem';
import ItemDetail from '../sideBarItemDetail';

const SideBar = () => {
  const [dashbord, setDashbord] = useState(false);
  const [students, setstudents] = useState(false);
  const clicked = (e) => {
    setDashbord(!dashbord);
    console.log('clicked', dashbord);
  };
  return (
    <div className="side-bar-wrapper">
      <div className="side-bar-header flex curser">
        <h1>Akhor</h1>
        <MenuIcon style={{ fontSize: 40 }} />
      </div>
      <SideBarItem
        name="Dashbord"
        value="dashbord"
        active={`${dashbord ? 'active' : null}`}
        arrowDown={`${dashbord ? 'arrow-down' : null}`}
        clicked={(e) => clicked(e)}
      >
        <DashboardIcon style={{ fontSize: 20 }} />
      </SideBarItem>
      <SideBarItem
        name="Students"
        value="students"
        active={`${dashbord ? 'active' : null}`}
        arrowDown={`${dashbord ? 'arrow-down' : null}`}
        clicked={(e) => clicked(e)}
      >
        <PeopleIcon style={{ fontSize: 20 }} />
      </SideBarItem>
      <SideBarItem
        name="Teachers"
        active={`${dashbord ? 'active' : null}`}
        arrowDown={`${dashbord ? 'arrow-down' : null}`}
        clicked={clicked}
      >
        <PeopleIcon style={{ fontSize: 20 }} />
      </SideBarItem>
      <SideBarItem
        name="Parents"
        active={`${dashbord ? 'active' : null}`}
        arrowDown={`${dashbord ? 'arrow-down' : null}`}
        clicked={clicked}
      >
        <PersonAddIcon style={{ fontSize: 20 }} />
      </SideBarItem>
      <ItemDetail name="Admin" />
      <ItemDetail name="Student" />
      <ItemDetail name="Teacher" />
      <ItemDetail name="Parent" />
    </div>
  );
};

export default SideBar;
