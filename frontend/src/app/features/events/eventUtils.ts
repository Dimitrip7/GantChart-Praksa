import { Event } from "@/app/components/GanttCalendar/types";

/**
 * Filters events based on status, partner, and selected date.
 */
export function filterEvents(
  events: Event[],
  status: string,
  partner: string,
  selectedDate: Date | null
): Event[] {
  return events.filter((event) => {
    const statusMatch =
      !status || event.name.toLowerCase().includes(status.toLowerCase());
    const partnerMatch = !partner || event.Partner.id.toString() === partner;
    const dateMatch =
      !selectedDate ||
      new Date(event.dateStart).toDateString() === selectedDate.toDateString();
    return statusMatch && partnerMatch && dateMatch;
  });
}

/**
 * Enhances events with additional metadata, like color coding.
 */
export function enhanceEvents(events: Event[]): Event[] {
  return events.map((event) => {
    let color = "#42a5f5"; // Default blue
    if (event.name.includes("Closed") || event.name.includes("Production"))
      color = "#ec407a"; // Pink for Closed and Production
    if (event.name.includes("Build")) color = "#42a5f5"; // Blue for Build

    return { ...event, color };
  });
}
