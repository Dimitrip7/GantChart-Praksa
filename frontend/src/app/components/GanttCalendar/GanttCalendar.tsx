"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import styles from "./styles/GanttCalendar.module.scss";
import EventModal from "./EventModal";
import FilterBar from "./FilterBar";
import DatePickerDialog from "./DatePickerDialog";
import CalendarHeader from "./CalendarHeader";
import EventsList from "./EventsList";
import { filterEvents } from "@/app/features/events/eventUtils";
import { getUniquePartners } from "@/app/utils/uniquePartnersUtils";
import { generateDaysWithFilteredEvents } from "@/app/utils/generateDaysWithFilteredEvents";
import { useLoadEvents } from "@/app/hooks/useLoadEvents";
import { useURLFilters } from "@/app/hooks/useURLFilters";
import { useEventModal } from "@/app/hooks/useEventModal";

const GanttCalendar = () => {
  const { status, setStatus, partner, setPartner, selectedDate, setSelectedDate } =
    useURLFilters();
  const { events, isLoading, error } = useLoadEvents();
  const { selectedEvent, isModalOpen, handleEventClick, handleCloseModal } =
    useEventModal();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const filteredEvents = filterEvents(events, status, partner, selectedDate);

  const daysOfWeek = generateDaysWithFilteredEvents(
    filteredEvents,
    selectedDate,
    10
  );

  const uniquePartners = getUniquePartners(events);

  return (
    <Box className={styles.container}>
      <FilterBar
        status={status}
        onStatusChange={(event) => setStatus(event.target.value)}
        partner={partner}
        onPartnerChange={(event) => setPartner(event.target.value)}
        onOpenDatePicker={() => setIsDatePickerOpen(true)}
        uniquePartners={uniquePartners}
        onClearFilters={() => {
          setStatus("");
          setPartner("");
          setSelectedDate(null);
        }}
      />

      <DatePickerDialog
        isOpen={isDatePickerOpen}
        selectedDate={selectedDate}
        onClose={() => setIsDatePickerOpen(false)}
        onChange={(date) => setSelectedDate(date)}
      />

      <Box className={styles.redLine} />

      <CalendarHeader daysOfWeek={daysOfWeek} />

      <EventsList
        events={filteredEvents}
        daysOfWeek={daysOfWeek}
        onEventClick={handleEventClick}
        isLoading={isLoading}
        error={error}
      />

      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default GanttCalendar;
