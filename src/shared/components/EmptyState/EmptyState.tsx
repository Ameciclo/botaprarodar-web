import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './EmptyState.style';

type EmptyStateProps = {
  imgSrc: string;
  heading: string;
  subheading: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({
  imgSrc,
  heading,
  subheading,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={imgSrc} alt="ciclistas" className={classes.image} />
      <Typography variant="h3" component="h3" className={classes.heading}>
        {' '}
        {heading}
      </Typography>
      <Typography variant="h4" component="h4" className={classes.subheading}>
        {subheading}
      </Typography>
    </div>
  );
};

export default EmptyState;
