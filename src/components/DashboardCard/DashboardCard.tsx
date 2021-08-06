import { Paper } from '@material-ui/core';
import React, { FC } from 'react';

interface DashboardCardProps {
  title: string;
  text: string | number | undefined;
}
const DashboardCard: FC<DashboardCardProps> = ({ title, text }) => {
  return (
    <Paper style={{ padding: '10px' }}>
      <div>{title || ''}</div>
      <div>{text || 0}</div>
    </Paper>
  );
};

export default DashboardCard;
