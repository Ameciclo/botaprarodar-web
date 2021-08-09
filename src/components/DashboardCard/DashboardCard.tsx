import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React, { FC } from 'react';

interface DashboardCardProps {
  title: string;
  text: string | number | undefined;
  icon?: any;
  iconColor?: string;
}
const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  icon: Icon,
  iconColor,
}) => {
  return (
    <Card style={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3} style={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title || ''}
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {text || 0}
            </Typography>
          </Grid>
          {Icon && (
            <Grid item>
              <Avatar
                style={{
                  backgroundColor: iconColor || red[600],
                  height: 56,
                  width: 56,
                }}
              >
                <Icon />
              </Avatar>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
