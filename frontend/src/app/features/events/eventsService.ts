// src/app/events/eventsService.ts
import { Event } from "../../components/GanttCalendar/types";

export async function fetchEvents(): Promise<Event[]> {
  const response = await fetch("http://localhost:3001/events");
  if (!response.ok) throw new Error("Failed to fetch events");

  const data = await response.json();
  return data.map((event: Event) => {
    let color = "#42a5f5"; // Default blue
    if (event.name.includes("Closed") || event.name.includes("Production"))
      color = "#ec407a"; // Pink for Closed and Production
    if (event.name.includes("Build")) color = "#42a5f5"; // Blue for Build

    return { ...event, color };
  });
}
