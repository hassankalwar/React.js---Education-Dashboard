import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import SideBarItem from '../sideBarItem';
import ItemDetail from '../sideBarItemDetail';

const SideBar = () => {
  const [dashbord, setDashbord] = useState(false);
  const [students, setStudents] = useState(false);
  const [teachers, setTeachers] = useState(false);
  const [parents, setParents] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const clicked = (e) => {
    switch (e) {
      case 'Dashbord':
        setDashbord(!dashbord);
        setStudents(false);
        setTeachers(false);
        setParents(false);
        break;
      case 'Students':
        setStudents(!students);
        setDashbord(false);
        setTeachers(false);
        setParents(false);
        break;
      case 'Teachers':
        setTeachers(!teachers);
        setDashbord(false);
        setStudents(false);
        setParents(false);
        break;
      case 'Parents':
        setParents(!parents);
        setDashbord(false);
        setStudents(false);
        setTeachers(false);
        break;
      default:
        break;
    }
    console.log('clicked', dashbord, e);
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setParents(false);
    setDashbord(false);
    setStudents(false);
    setTeachers(false);
  };
  return (
    <div
      className={sidebar ? 'side-bar-wrapper' : 'narrow-sidebar'}
      onClick={sidebar ? null : toggleSidebar}
    >
      <div
        className="side-bar-header flex curser"
        onClick={sidebar ? toggleSidebar : null}
      >
        {sidebar ? <h1>Edvorb</h1> : null}
        <MenuIcon style={{ fontSize: 30 }} />
      </div>
      <div className="side-bar-menu">
        <SideBarItem
          name={sidebar ? 'Dashbord' : undefined}
          active={`${dashbord ? 'active' : null}`}
          arrowDown={sidebar ? `${dashbord ? 'arrow-down' : null}` : undefined}
          clicked={(e) => clicked('Dashbord')}
        >
          <DashboardIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        {dashbord ? (
          <>
            <ItemDetail name="Admin" />
            <ItemDetail name="Student" />
            <ItemDetail name="Teacher" />
            <ItemDetail name="Parent" />
          </>
        ) : null}
        <SideBarItem
          name={sidebar ? 'Students' : undefined}
          active={`${students ? 'active' : null}`}
          arrowDown={`${students ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Students')}
        >
          <PeopleIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Teachers' : undefined}
          active={`${teachers ? 'active' : null}`}
          arrowDown={`${teachers ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Teachers')}
        >
          <PeopleIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>

        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => clicked('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
      </div>
    </div>
  );
};

export default SideBar;
