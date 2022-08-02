import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './CustomLabel.styles';

type variantLabel = 'default' | 'primary';

interface Props {
  text: string;
  total?: number;
  variant?: variantLabel;
}

const CustomLabel: FC<Props> = ({ text, total, variant }) => {
  const classes = useStyles();
  return (
    <Box boxShadow={1}>
      <div
        className={`${classes.content} ${classes[variant || 'default']}`}
        data-testid="content"
      >
        <Typography variant="body1" component="h6">
          {text}
        </Typography>
        <div>{total}</div>
      </div>
    </Box>
  );
};

CustomLabel.defaultProps = {
  total: 0,
  variant: 'default',
};
export default CustomLabel;
