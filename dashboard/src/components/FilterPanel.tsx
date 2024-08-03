import React from 'react';
import { Drawer, TextField, Select, MenuItem, Button } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  dateFrom: Date;
  dateTo: Date;
  category: string;
  onDateFromChange: (date: Date | null) => void;
  onDateToChange: (date: Date | null) => void;
  onCategoryChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen, onClose, dateFrom, dateTo, category,
  onDateFromChange, onDateToChange, onCategoryChange
}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <DatePicker
        label="From"
        value={dateFrom}
        onChange={onDateFromChange}
        renderInput={(props) => <TextField {...props} />}
      />
      <DatePicker
        label="To"
        value={dateTo}
        onChange={onDateToChange}
        renderInput={(props) => <TextField {...props} />}
      />
      <Select value={category} onChange={onCategoryChange}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="product1">Product 1</MenuItem>
        <MenuItem value="product2">Product 2</MenuItem>
      </Select>
      <Button onClick={onClose}>Apply</Button>
    </Drawer>
  </MuiPickersUtilsProvider>
);

export default FilterPanel;