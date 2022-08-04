import { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import Icon, { IconTypes } from 'shared/components/Icon/Icon';
import useStyles from './CustomCardWithIcon.styles';

interface Props {
  id: string;
  text: string;
  iconName?: IconTypes | null;
}

const CustomCardWithIcon: FC<Props> = ({ id, text, iconName }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      {!!iconName && (
        <div className={classes.communityManagementIcons}>
          <Icon name={iconName} />
        </div>
      )}
      <Typography
        variant="h6"
        data-testId={id}
        className={classes.upperCardText}
      >
        {text}
      </Typography>
    </div>
  );
};

CustomCardWithIcon.defaultProps = {
  iconName: null,
};

export default CustomCardWithIcon;
