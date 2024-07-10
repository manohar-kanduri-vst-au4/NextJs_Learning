
"use client"
// pages/index.js (updated)
import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Typography, Button } from '@mui/material';
import MyCalendar from './Calender';
import EditEventModal from './EditEventModal';

const eventsData = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(2024, 6, 1, 10, 0),
    end: new Date(2024, 6, 1, 12, 0),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Add more events as needed
];

const Home = () => {
  const [events, setEvents] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setOpenEditModal(true);
  };

  const handleSaveEvent = (updatedEvent) => {
    const updatedEvents = events.map((ev) =>
      ev.id === updatedEvent.id ? updatedEvent : ev
    );
    setEvents(updatedEvents);
  };

  const handleCloseModal = () => {
    setOpenEditModal(false);
    setSelectedEvent(null);
  };

  return (
    <Container>
      <Head>
        <title>Customizable Calendar</title>
      </Head>
      <Typography variant="h4" align="center" mt={4} mb={2}>
        Event Calendar
      </Typography>
      <MyCalendar events={events} onSelectEvent={handleSelectEvent} />
      <EditEventModal
        event={selectedEvent}
        open={openEditModal}
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
      />
    </Container>
  );
};

export default Home;
