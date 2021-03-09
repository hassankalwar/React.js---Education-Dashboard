import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ClassIcon from '@material-ui/icons/Class';
import SubjectIcon from '@material-ui/icons/Subject';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import ApartmentIcon from '@material-ui/icons/Apartment';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import MessageIcon from '@material-ui/icons/Message';
import BuildIcon from '@material-ui/icons/Build';
import MapIcon from '@material-ui/icons/Map';

import SideBarItem from '../sideBarItem';
import ItemDetail from '../sideBarItemDetail';

const SideBar = () => {
  const [dashbord, setDashbord] = useState(false);
  const [students, setStudents] = useState(false);
  const [teachers, setTeachers] = useState(false);
  const [parents, setParents] = useState(false);
  const [library, setLibrary] = useState(false);
  const [account, setAccount] = useState(false);
  const [clas, setClas] = useState(false);
  const [subject, setSubject] = useState(false);
  const [classRoutine, setClassRoutine] = useState(false);
  const [attendance, setAttendance] = useState(false);
  const [exams, setExams] = useState(false);
  const [transport, setTransport] = useState(false);
  const [hostel, setHostel] = useState(false);
  const [notice, setNotice] = useState(false);
  const [message, setMessage] = useState(false);
  const [uiElements, setUiElements] = useState(false);
  const [map, setMap] = useState(false);

  const [Dashbord, setdashbord] = useState(false);
  const [Students, setstudents] = useState(false);
  const [Teachers, setteachers] = useState(false);
  const [Parents, setparents] = useState(false);
  const [Library, setlibrary] = useState(false);
  const [Account, setaccount] = useState(false);
  const [Clas, setclas] = useState(false);
  const [Subject, setsubject] = useState(false);
  const [ClassRoutine, setclassRoutine] = useState(false);
  const [Attendance, setattendance] = useState(false);
  const [Exams, setexams] = useState(false);
  const [Transport, settransport] = useState(false);
  const [Hostel, sethostel] = useState(false);
  const [Notice, setnotice] = useState(false);
  const [Message, setmessage] = useState(false);
  const [UiElements, setuiElements] = useState(false);
  const [Map, setmap] = useState(false);

  const [sidebar, setSidebar] = useState(true);

  const toggleIndividual = (e) => {
    switch (e) {
      case 'Dashbord':
        setDashbord(!dashbord);
        setdashbord(!Dashbord);
        break;
      case 'Students':
        setStudents(!students);
        setstudents(!Students);
        break;
      case 'Teachers':
        setTeachers(!teachers);
        setteachers(!Teachers);
        break;
      case 'Parents':
        setParents(!parents);
        setparents(!Parents);
        break;

      case 'Library':
        setLibrary(!library);
        setlibrary(!Library);
        break;
      case 'Account':
        setAccount(!account);
        setaccount(!Account);
        break;
      case 'Class':
        setClas(!clas);
        setclas(!Clas);
        break;
      case 'Subject':
        setSubject(!subject);
        setsubject(!Subject);
        break;

      case 'Class Routine':
        setClassRoutine(!classRoutine);
        setclassRoutine(!ClassRoutine);
        break;
      case 'Attendance':
        setAttendance(!attendance);
        setattendance(!Attendance);
        break;
      case 'Exams':
        setExams(!exams);
        setexams(!Exams);
        break;
      case 'Transport':
        setTransport(!transport);
        settransport(!Transport);
        break;

      case 'Hostel':
        setHostel(!hostel);
        sethostel(!Hostel);
        break;
      case 'Notice':
        setNotice(!notice);
        setnotice(!Notice);
        break;
      case 'Message':
        setMessage(!message);
        setmessage(!Message);
        break;
      case 'UI Elements':
        setUiElements(!uiElements);
        setuiElements(!UiElements);
        break;
      case 'Map':
        setMap(!map);
        setmap(!Map);
        break;
      default:
        break;
    }
    console.log('clicked', dashbord, e);
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
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
          arrowDown={dashbord ? `${dashbord ? 'arrow-down' : null}` : undefined}
          clicked={(e) => toggleIndividual('Dashbord')}
        >
          <DashboardIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        {Dashbord ? (
          <>
            <ItemDetail name="Admin" />
            <ItemDetail name="Student" />
            <ItemDetail name="Parent" />
          </>
        ) : null}
        <SideBarItem
          name={sidebar ? 'Students' : undefined}
          active={`${students ? 'active' : null}`}
          arrowDown={`${students ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Students')}
        >
          <PeopleIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        {Students ? (
          <>
            <ItemDetail name="All Students" />
            <ItemDetail name="Student Details" />
            <ItemDetail name="Admint Form" />
            <ItemDetail name="Student Promotion" />
          </>
        ) : null}
        <SideBarItem
          name={sidebar ? 'Teachers' : undefined}
          active={`${teachers ? 'active' : null}`}
          arrowDown={`${teachers ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Teachers')}
        >
          <PeopleIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        {Teachers ? (
          <>
            <ItemDetail name="All Teachers" />
            <ItemDetail name="Teacher Details" />
            <ItemDetail name="Add Teacher" />
          </>
        ) : null}
        <SideBarItem
          name={sidebar ? 'Parents' : undefined}
          active={`${parents ? 'active' : null}`}
          arrowDown={`${parents ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Parents')}
        >
          <PersonAddIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Library' : undefined}
          active={`${library ? 'active' : null}`}
          arrowDown={`${library ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Library')}
        >
          <LibraryBooksIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        {Library ? (
          <>
            <ItemDetail name="All Books" />
            <ItemDetail name="Add Book" />
          </>
        ) : null}
        <SideBarItem
          name={sidebar ? 'Account' : undefined}
          active={`${account ? 'active' : null}`}
          arrowDown={`${account ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Account')}
        >
          <AccountBalanceIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        {Account ? (
          <>
            <ItemDetail name="Fees Collection" />
            <ItemDetail name="Create Student Payment" />
            <ItemDetail name="All Expenses" />
            <ItemDetail name="Add Expenses" />
          </>
        ) : null}
        <SideBarItem
          name={sidebar ? 'Class' : undefined}
          active={`${clas ? 'active' : null}`}
          arrowDown={`${clas ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Class')}
        >
          <ClassIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        {Clas ? (
          <>
            <ItemDetail name="All Classes" />
            <ItemDetail name="Add New Class" />
          </>
        ) : null}
        <SideBarItem
          name={sidebar ? 'Subject' : undefined}
          active={`${subject ? 'active' : null}`}
          arrowDown={`${subject ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Subject')}
        >
          <SubjectIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Class Routine' : undefined}
          active={`${classRoutine ? 'active' : null}`}
          arrowDown={`${classRoutine ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Class Routine')}
        >
          <ViewDayIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Attendance' : undefined}
          active={`${attendance ? 'active' : null}`}
          arrowDown={`${attendance ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Attendance')}
        >
          <FingerprintIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Exams' : undefined}
          active={`${exams ? 'active' : null}`}
          arrowDown={`${exams ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Exams')}
        >
          <ReceiptIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        {Exams ? (
          <>
            <ItemDetail name="Exam Schedule" />
            <ItemDetail name="Exame Grades" />
          </>
        ) : null}
        <SideBarItem
          name={sidebar ? 'Transport' : undefined}
          active={`${transport ? 'active' : null}`}
          arrowDown={`${transport ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Transport')}
        >
          <DirectionsBusIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Hostel' : undefined}
          active={`${hostel ? 'active' : null}`}
          arrowDown={`${hostel ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Hostel')}
        >
          <ApartmentIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Notice' : undefined}
          active={`${notice ? 'active' : null}`}
          arrowDown={`${notice ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Notice')}
        >
          <CallToActionIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Message' : undefined}
          active={`${message ? 'active' : null}`}
          arrowDown={`${message ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Message')}
        >
          <MessageIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'UI Elements' : undefined}
          active={`${uiElements ? 'active' : null}`}
          arrowDown={`${uiElements ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('UI Elements')}
        >
          <BuildIcon style={{ fontSize: 20 }} />
        </SideBarItem>
        <SideBarItem
          name={sidebar ? 'Map' : undefined}
          active={`${map ? 'active' : null}`}
          arrowDown={`${map ? 'arrow-down' : null}`}
          clicked={(e) => toggleIndividual('Map')}
        >
          <MapIcon style={{ fontSize: 20 }} />
        </SideBarItem>
      </div>
    </div>
  );
};

export default SideBar;
