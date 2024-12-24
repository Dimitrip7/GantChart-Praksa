import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import { Event } from "./types";

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Event Details</DialogTitle>
      <DialogContent>
        {event && (
          <div>
            <Typography>
              <strong>Name:</strong> {event.name}
            </Typography>
            <Typography>
              <strong>Start Date:</strong>{" "}
              {new Date(event.dateStart).toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Typography>
            <Typography>
              <strong>End Date:</strong>{" "}
              {new Date(event.dateEnd).toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Typography>
            <Typography>
              <strong>Partner:</strong> {event.Partner.name}
            </Typography>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventModal;
