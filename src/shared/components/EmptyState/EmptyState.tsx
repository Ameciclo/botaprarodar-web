import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './EmptyState.style';

export type Props = {
  imgSrc: string;
  heading: string;
  subheading: string;
};

const EmptyState: React.FC<Props> = ({ imgSrc, heading, subheading }) => {
  const classes = useStyles();

  return (
    <div data-testid="empty-state" className={classes.root}>
      <img src={imgSrc} alt="ciclistas" className={classes.image} />
      <Typography variant="h3" component="h3" className={classes.heading}>
        {heading}
      </Typography>
      <Typography variant="h4" component="h4" className={classes.subheading}>
        {subheading}
      </Typography>
    </div>
  );
};

export default EmptyState;
