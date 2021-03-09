import React from 'react';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { FaGooglePlusSquare } from 'react-icons/fa';

import Card from '../numberCard';
import Calender from '../calender';
import SocialCard from '../socialMediaCard';

const Admin = () => {
  return (
    <div className="admin-wrapper">
      <div className="cards flex">
        <Card number="50,000" statement="no of our students" name="student">
          <PeopleIcon style={{ fontSize: 60 }} />
        </Card>
        <Card number="80,000" statement="Total Parents" name="parent">
          <PeopleIcon style={{ fontSize: 60 }} />
        </Card>
        <Card number="10,000" statement="Our Expert teachers" name="teacher">
          <PersonAddIcon style={{ fontSize: 60 }} />
        </Card>
        <Card number="1,00,000" statement="Yearly Total Earning">
          <LocalAtmIcon style={{ fontSize: 60 }} />
        </Card>
      </div>
      <div className="graph"></div>
      <div className="social-media flex">
        <SocialCard
          name="facebook"
          number="50,000"
          statement="on Facebook"
          text="Like us"
        >
          <FacebookIcon style={{ fontSize: 30 }} />
        </SocialCard>
        <SocialCard
          name="twitter"
          number="20,000"
          statement="on Twitter"
          text="Follow us"
        >
          <TwitterIcon style={{ fontSize: 30 }} />
        </SocialCard>
        <SocialCard
          name="google"
          number="10,000"
          statement="on Google Plus"
          text="Follow us"
        >
          <FaGooglePlusSquare size="1.7em" />
        </SocialCard>
        <SocialCard
          name="linkedin"
          number="7,000"
          statement="on Linkedin"
          text="Follow us"
        >
          <LinkedInIcon style={{ fontSize: 30 }} />
        </SocialCard>
      </div>
      <div className="callender">
        <Calender />
      </div>
      <div className="notice-board"></div>
      <div className="recent-activities"></div>
    </div>
  );
};

export default Admin;
