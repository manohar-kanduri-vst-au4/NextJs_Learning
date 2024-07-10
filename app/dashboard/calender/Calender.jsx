// components/Calendar.js
import React from 'react';
import { Box, Grid } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, onSelectEvent }) => {
  return (
    <Box p={4}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={onSelectEvent}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyCalendar;
