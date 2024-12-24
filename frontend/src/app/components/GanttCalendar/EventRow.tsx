"use client";

import React from "react";
import { Grid, Typography } from "@mui/material";
import { Event } from "./types";
import styles from "./styles/GanttCalendar.module.scss";

interface EventRowProps {
  event: Event;
  daysOfWeek: Date[];
  onEventClick: (event: Event) => void;
}

const normalizeDate = (date: Date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

const EventRow: React.FC<EventRowProps> = ({ event, daysOfWeek, onEventClick }) => {
  const startDate = normalizeDate(new Date(event.dateStart));
  const endDate = normalizeDate(new Date(event.dateEnd));
  endDate.setDate(endDate.getDate() + 1); // Include the end date fully

  return (
    <Grid
      container
      className={`${styles.eventRow}`}
      onClick={() => onEventClick(event)}
    >
      <Grid
        item
        xs={3}
        className={styles.eventName}
        style={{ cursor: "pointer" }}
      >
        <Typography variant="body1">{event.name}</Typography>
      </Grid>
      <Grid item xs={2} className={`${styles.eventDate} ${styles.borderLeft}`}>
        <Typography variant="body1">
          {new Date(event.dateStart).toLocaleDateString("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </Typography>
      </Grid>
      <Grid item xs={2} className={`${styles.eventDate} ${styles.borderLeft}`}>
        <Typography variant="body1">
          {new Date(event.dateEnd).toLocaleDateString("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </Typography>
      </Grid>
      {daysOfWeek.map((currentDate, dayIndex) => {
        const isWithinRange =
          currentDate.getTime() >= startDate.getTime() &&
          currentDate.getTime() < endDate.getTime();
        return (
          <Grid item xs key={dayIndex} className={styles.dayCell}>
            {isWithinRange ? (
              <div
                className={styles.eventBar}
                style={{
                  backgroundColor: event.color,
                }}
              ></div>
            ) : null}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EventRow;
