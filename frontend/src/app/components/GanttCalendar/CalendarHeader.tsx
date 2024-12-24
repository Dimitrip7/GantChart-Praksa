import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./styles/GanttCalendar.module.scss";

interface CalendarHeaderProps {
  daysOfWeek: Date[];
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ daysOfWeek }) => {
  return (
    <Grid container className={styles.calendarHeader}>
      <Grid item xs={3} className={styles.headerName}>
        <Typography variant="body1" className={styles.headerText}>
          Name
        </Typography>
      </Grid>
      <Grid item xs={2} className={styles.borderLeft}>
        <Typography variant="body1" className={styles.headerText}>
          From
        </Typography>
      </Grid>
      <Grid item xs={2} className={styles.borderLeft}>
        <Typography variant="body1" className={styles.headerText}>
          To
        </Typography>
      </Grid>
      {daysOfWeek.map((day, index) => (
        <Grid
          item
          xs
          key={index}
          className={`${styles.dayCellHeader} ${
            index === 0 ? styles.borderLeftRight : ""
          }`}
        >
          <Typography variant="body1" className={styles.dayText}>
            {day.toLocaleDateString("en-GB", {
              weekday: "short",
              day: "2-digit",
            })}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CalendarHeader;
