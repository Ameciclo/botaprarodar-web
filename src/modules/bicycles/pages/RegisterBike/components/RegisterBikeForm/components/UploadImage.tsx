/* eslint-disable jsx-a11y/label-has-associated-control */
import { Card, Grid, IconButton, Typography } from '@material-ui/core';
import { ErrorOutline } from '@material-ui/icons';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Controller } from 'react-hook-form';
import useStyles from './UploadImage.styles';

interface Props {
  title: string;
  id: string;
  name: string;
  dataTestId: string;
  control: any;
  rules: Record<string, unknown>;
}

const UploadImage = ({
  title,
  id,
  dataTestId,
  name,
  control,
  rules,
}: Props) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div>
            <Card
              variant="outlined"
              className={error ? classes.cardError : classes.card}
            >
              <Grid
                container
                direction="column"
                alignContent="flex-start"
                spacing={1}
              >
                <Grid item>
                  <Typography className={classes.title}>{title}</Typography>
                </Grid>
                <Grid container item alignItems="center">
                  <Grid item>
                    <input
                      id={id}
                      accept="image/*"
                      type="file"
                      data-testid={dataTestId}
                      onChange={e => onChange(e.target.files?.[0] ?? '')}
                      className={classes.input}
                    />
                    <label htmlFor={id}>
                      <IconButton component="span">
                        <AddAPhotoOutlinedIcon />
                      </IconButton>
                    </label>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.value}>
                      {value ? value.name : ''}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
            {error ? (
              <span className={classes.errorContainer}>
                <ErrorOutline />
                {error.message}
              </span>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default UploadImage;
