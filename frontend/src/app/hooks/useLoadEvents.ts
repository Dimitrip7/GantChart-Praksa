import { useState, useEffect } from "react";
import { fetchEvents } from "@/app/features/events/eventsService";
import { enhanceEvents } from "@/app/features/events/eventUtils";
import { Event } from "@/app/components/GanttCalendar/types";

export const useLoadEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        const data = await fetchEvents();
        const enhanced = enhanceEvents(data);
        setEvents(enhanced);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Error fetching events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  return { events, isLoading, error };
};
