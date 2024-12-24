import { useState } from "react";

export function useFilters() {
  const [status, setStatus] = useState<string>("");
  const [partner, setPartner] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const clearFilters = () => {
    setStatus("");
    setPartner("");
    setSelectedDate(null);
  };

  return {
    status,
    setStatus,
    partner,
    setPartner,
    selectedDate,
    setSelectedDate,
    clearFilters,
  };
}
