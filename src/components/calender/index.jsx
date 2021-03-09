import React from 'react';
import Calendar from 'react-calendar';
import Divider from '@material-ui/core/Divider';

const Calender = () => {
  const date = new Date();
  console.log(date);
  return (
    <div className="calan">
      <h3>Event Calendar</h3>
      <Divider />
      <Calendar
        // onChange={onChange}
        // value={value}
        className="calandar"
        defaultValue={new Date()}
      />
    </div>
  );
};
export default Calender;
