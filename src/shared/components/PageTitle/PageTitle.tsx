import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Icon, { IconTypes } from 'shared/components/Icon/Icon';
import useStyles from './PageTitle.styles';

interface Props {
  id: string;
  text: string;
  iconName?: IconTypes | null;
}

const PageTitle: FC<Props> = ({ id, text, iconName }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      component="header"
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      spacing={2}
      xs={12}
    >
      <Typography variant="h5" data-testId={id}>
        {text}
      </Typography>

      {!!iconName && (
        <div className={classes.wrapperIcon}>
          <Icon name={iconName} />
        </div>
      )}
    </Grid>
  );
};

PageTitle.defaultProps = {
  iconName: null,
};

export default PageTitle;
