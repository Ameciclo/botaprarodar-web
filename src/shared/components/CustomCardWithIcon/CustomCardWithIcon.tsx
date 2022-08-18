import React, { FC } from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import Icon, { IconTypes } from 'shared/components/Icon/Icon';
import useStyles from './CustomCardWithIcon.styles';

export interface Props {
  id: string;
  text: string;
  iconName: IconTypes;
  iconDescription: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | undefined;
}

const CustomCardWithIcon: FC<Props> = ({
  id,
  text,
  iconName,
  iconDescription,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea onClick={onClick} data-testid={`card-action-${id}`}>
        <CardContent>
          {!!iconName && (
            <div className={classes.wrapperIcon}>
              <Icon name={iconName} description={iconDescription} />
            </div>
          )}
          <Typography variant="h6" data-testid={id} className={classes.text}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CustomCardWithIcon.defaultProps = {
  onClick: undefined,
};

export default CustomCardWithIcon;
