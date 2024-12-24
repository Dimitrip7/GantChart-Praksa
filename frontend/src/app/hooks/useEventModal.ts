import { useState } from "react";
import { Event } from "@/app/components/GanttCalendar/types";

export const useEventModal = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  return {
    selectedEvent,
    isModalOpen,
    handleEventClick,
    handleCloseModal,
  };
};
