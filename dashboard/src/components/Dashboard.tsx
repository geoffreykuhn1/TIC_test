import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { FilterList as FilterIcon } from '@material-ui/icons';
import InfoCard from './InfoCard';
import Chart from './Chart';
import FilterPanel from './FilterPanel';
import { mockData } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [dateFrom, setDateFrom] = useState<Date>(new Date('2023-01-01'));
  const [dateTo, setDateTo] = useState<Date>(new Date('2023-06-30'));
  const [category, setCategory] = useState('all');

  return (
    <div>
      <IconButton onClick={() => setIsFilterOpen(true)}>
        <FilterIcon />
      </IconButton>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <InfoCard title="Total Users" value={1234} />
        </Grid>
        <Grid item xs={4}>
          <InfoCard title="Revenue" value="$5,678" />
        </Grid>
        <Grid item xs={4}>
          <InfoCard title="Satisfaction Rate" value="89%" />
        </Grid>
        <Grid item xs={12}>
          <Chart data={mockData.sales} title="Sales" />
        </Grid>
      </Grid>
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        dateFrom={dateFrom}
        dateTo={dateTo}
        category={category}
        onDateFromChange={setDateFrom}
        onDateToChange={setDateTo}
        onCategoryChange={(e) => setCategory(e.target.value as string)}
      />
    </div>
  );
};

export default Dashboard;