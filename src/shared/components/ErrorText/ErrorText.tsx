import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export interface Props {
  id: string;
  text: string;
}

const ErrorText: FC<Props> = ({ id, text }) => (
  <Box marginBottom={2} marginTop={2} textAlign="center">
    <Typography data-testid={id} paragraph variant="body1" color="error">
      {text}
    </Typography>
  </Box>
);

export default ErrorText;
