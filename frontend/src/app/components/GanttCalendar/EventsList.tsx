"use client";

import React from "react";
import { Box } from "@mui/material";
import EventRow from "./EventRow";
import { EventsListProps } from "./types";
import styles from "./styles/GanttCalendar.module.scss";


const EventsList: React.FC<EventsListProps> = ({
  events,
  daysOfWeek,
  onEventClick,
  isLoading,
  error,
}) => {
  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box className={styles.contentBelow}>
      {events.map((event) => (
        <EventRow
          key={event.id}
          event={event}
          daysOfWeek={daysOfWeek}
          onEventClick={onEventClick}
        />
      ))}
    </Box>
  );
};

export default EventsList;
