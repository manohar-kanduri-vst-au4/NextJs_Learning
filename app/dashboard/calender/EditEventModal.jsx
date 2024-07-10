"use client"
// components/EditEventModal.js
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const EditEventModal = ({ event, open, onClose, onSave }) => {
    const [editedEvent, setEditedEvent] = useState(event || { title: '', start: new Date(), end: new Date(), description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({
      ...editedEvent,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedEvent);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxWidth: 400,
          width: '100%',
        }}
      >
        <Typography variant="h6" mb={2}>
          Edit Event
        </Typography>
        <TextField
          label="Title"
          name="title"
        //   value={editedEvent.title}
        value={editedEvent ? editedEvent.title : ''}

          onChange={handleChange}
          fullWidth
          mb={2}
        />
        <TextField
          label="Start Time"
          type="datetime-local"
          name="start"
          value={editedEvent.start}
          onChange={handleChange}
          fullWidth
          mb={2}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Time"
          type="datetime-local"
          name="end"
          value={editedEvent.end}
          onChange={handleChange}
          fullWidth
          mb={2}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Description"
          name="description"
          value={editedEvent.description}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          mb={2}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditEventModal;
