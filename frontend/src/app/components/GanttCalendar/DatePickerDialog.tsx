import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DatePickerDialogProps } from "./types"

const DatePickerDialog: React.FC<DatePickerDialogProps> = ({
  isOpen,
  selectedDate,
  onClose,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Select Start Date</DialogTitle>
        <DialogContent>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </DialogContent>
        <Button onClick={onClose} color="primary">
          Done
        </Button>
      </Dialog>
    </LocalizationProvider>
  );
};

export default DatePickerDialog;
