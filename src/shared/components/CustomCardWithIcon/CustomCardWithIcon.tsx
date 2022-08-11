import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Icon, { IconTypes } from 'shared/components/Icon/Icon';
import useStyles from './CustomCardWithIcon.styles';

interface Props {
  id: string;
  text: string;
  iconName: IconTypes;
  iconDescription: string;
}

const CustomCardWithIcon: FC<Props> = ({
  id,
  text,
  iconName,
  iconDescription,
}) => {
  const classes = useStyles();

  return (
    <Box boxShadow={1} className={classes.card}>
      {!!iconName && (
        <div className={classes.wrapperIcon}>
          <Icon name={iconName} description={iconDescription} />
        </div>
      )}
      <Typography variant="h6" data-testId={id} className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
};

export default CustomCardWithIcon;
