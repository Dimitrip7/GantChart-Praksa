import { SelectChangeEvent } from "@mui/material";

export interface Partner {
  id: number;
  name: string;
}

export interface Event {
  id: number;
  name: string;
  dateStart: string;
  dateEnd: string;
  partnerId: number;
  Partner: Partner;
  color?: string;
}

export interface FilterBarProps {
  status: string;
  onStatusChange: (event: SelectChangeEvent<string>) => void;
  partner: string;
  onPartnerChange: (event: SelectChangeEvent<string>) => void;
  onOpenDatePicker: () => void;
  uniquePartners: Partner[];
  onClearFilters: () => void;
}

export interface DatePickerDialogProps {
  isOpen: boolean;
  selectedDate: Date | null;
  onClose: () => void;
  onChange: (date: Date | null) => void;
}

export interface EventsListProps {
  events: Event[];
  daysOfWeek: Date[];
  onEventClick: (event: Event) => void;
  isLoading: boolean;
  error: string | null;
}