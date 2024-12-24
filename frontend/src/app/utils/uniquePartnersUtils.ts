import { Event, Partner } from "@/app/components/GanttCalendar/types";

/**
 * Generates a list of unique partners from the given events.
 */
export function getUniquePartners(events: Event[]): Partner[] {
  return Array.from(
    new Set(events.map((event) => event.Partner.id))
  )
    .map((partnerId) => events.find((event) => event.Partner.id === partnerId))
    .filter((event) => event && event.Partner)
    .map((event) => event!.Partner);
}
