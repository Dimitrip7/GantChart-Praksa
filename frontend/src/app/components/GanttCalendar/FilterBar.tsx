import React from "react";
import { Box, Select, MenuItem, Button, SelectChangeEvent } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { FilterBarProps } from "./types";
import styles from "./styles/GanttCalendar.module.scss";

const FilterBar: React.FC<FilterBarProps> = ({
  status,
  onStatusChange,
  partner,
  onPartnerChange,
  onOpenDatePicker,
  uniquePartners,
  onClearFilters,
}) => {
  return (
    <Box className={styles.filters}>
      <Select
        value={status}
        onChange={(event: SelectChangeEvent<string>) => onStatusChange(event)}
        displayEmpty
        className={styles.select}
      >
        <MenuItem value="">Select a Status</MenuItem>
        <MenuItem value="closed">Closed</MenuItem>
        <MenuItem value="build">Build</MenuItem>
        <MenuItem value="production">Production</MenuItem>
      </Select>

      <Select
        value={partner}
        onChange={(event: SelectChangeEvent<string>) => onPartnerChange(event)}
        displayEmpty
        className={styles.select}
      >
        <MenuItem value="">Select a Partner</MenuItem>
        {uniquePartners.map((partner) => (
          <MenuItem key={partner.id} value={partner.id}>
            {partner.name}
          </MenuItem>
        ))}
      </Select>

      <Button
        variant="contained"
        color="primary"
        className={styles.button}
        startIcon={<EventIcon />}
        onClick={onOpenDatePicker}
      >
        Select
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        className={styles.button2}
        onClick={onClearFilters}
      >
        Clear Filters
      </Button>
    </Box>
  );
};

export default FilterBar;
