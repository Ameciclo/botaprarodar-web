import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Icon, { IconTypes } from 'shared/components/Icon/Icon';
import { Box } from '@material-ui/core';

interface Props {
  id: string;
  text: string;
  iconName?: IconTypes | null;
}

const PageTitle: FC<Props> = ({ id, text, iconName }) => {
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
        <Box
          boxShadow={1}
          m={1}
          p={1}
          style={{ width: '2rem', height: '2rem' }}
        >
          <Icon name={iconName} />
        </Box>
      )}
    </Grid>
  );
};

PageTitle.defaultProps = {
  iconName: null,
};

export default PageTitle;
