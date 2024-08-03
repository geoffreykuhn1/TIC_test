import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

interface InfoCardProps {
  title: string;
  value: string | number;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default InfoCard;