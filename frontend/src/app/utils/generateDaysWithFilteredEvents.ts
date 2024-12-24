import { Event } from "@/app/components/GanttCalendar/types";
import { generateDaysOfWeek } from "@/app/utils/generateDaysOfWeek";

/**
 * Generates an array of dates starting from the earliest event or the selected date.
 *
 * @param filteredEvents - Array of filtered events.
 * @param selectedDate - The selected date, if any.
 * @param numberOfDays - Number of days to generate.
 * @returns Array of generated dates.
 */
export function generateDaysWithFilteredEvents(
  filteredEvents: Event[],
  selectedDate: Date | null,
  numberOfDays: number = 10
): Date[] {
  if (filteredEvents.length > 0) {
    const earliestEventStart = filteredEvents.reduce((min, event) => {
      const eventStart = new Date(event.dateStart);
      return eventStart < min ? eventStart : min;
    }, new Date(filteredEvents[0].dateStart));

    return generateDaysOfWeek(selectedDate || earliestEventStart, numberOfDays);
  }
  return generateDaysOfWeek(new Date(), numberOfDays);
}
