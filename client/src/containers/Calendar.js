import React from 'react'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
import { connect } from 'react-redux'
require('react-big-calendar/lib/css/react-big-calendar.css')

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
  <div>
    <BigCalendar
      events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);
