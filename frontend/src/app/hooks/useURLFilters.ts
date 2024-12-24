import { useEffect, useState } from "react";


export const useURLFilters = () => {
  const [status, setStatus] = useState<string>("");
  const [partner, setPartner] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Sync filters with URL on mount
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const statusFromURL = searchParams.get("status");
    const partnerFromURL = searchParams.get("partner");
    const dateFromURL = searchParams.get("date");

    if (statusFromURL) setStatus(statusFromURL);
    if (partnerFromURL) setPartner(partnerFromURL);
    if (dateFromURL) setSelectedDate(new Date(dateFromURL));
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (status) searchParams.set("status", status);
    if (partner) searchParams.set("partner", partner);
    if (selectedDate) searchParams.set("date", selectedDate.toISOString());

    window.history.replaceState(null, "", `?${searchParams.toString()}`);
  }, [status, partner, selectedDate]);

  return {
    status,
    setStatus,
    partner,
    setPartner,
    selectedDate,
    setSelectedDate,
  };
};
