import { Card, CardContent, CardHeader } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import CustomCardStyles from './CustomCard.styles';

interface CustomCardProps {
  headerTitle: string | ReactElement;
  content: string | ReactElement;
}
const CustomCard: FC<CustomCardProps> = ({ headerTitle, content }) => {
  const classes = CustomCardStyles();
  return (
    <Card>
      <CardHeader title={headerTitle} classes={{ title: classes.cardHeader }} />
      <CardContent classes={{ root: classes.cardContent }}>
        {content}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
