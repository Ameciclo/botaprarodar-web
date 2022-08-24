import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { AuthInterface } from 'modules/authentication/models';
import { useHandleAuth } from 'modules/authentication/contexts';
import { LoginService } from 'modules/authentication/services';
import { Logo } from 'shared/components';
import { ROUTER } from 'routes';
import { schema, defaultValues, FormValues } from './Login.schema';
import useStyles from './Login.styles';
import FormLogin from './components/FormLogin';

const LoginPage = () => {
  const { control, handleSubmit, watch, formState } = useForm<FormValues>({
    defaultValues,
    mode: 'all',
  });
  const [hasServerError, setServerError] = useState(false);

  const values = watch();
  const history = useHistory();
  const classes = useStyles();

  const { onChange: saveUserInContext } = useHandleAuth();
  const { isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const { email, password } = data;
      const user = await LoginService.requestLogin(email, password);

      if (!user.authenticated) {
        setServerError(true);
        return;
      }

      saveUser(user);
      redirectToLoggedPage();
    } catch {
      setServerError(true);
    }
  };

  const saveUser = (user: AuthInterface) => saveUserInContext(user);

  const redirectToLoggedPage = () => history.push(ROUTER.DASHBOARD);

  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={10} sm={6} md={3}>
        <Paper>
          <Grid container>
            <Grid item className={classes.wrapperBrand}>
              <Logo />
            </Grid>
            <Grid item>
              <FormLogin
                id="form-login"
                onSubmit={handleSubmit(onSubmit)}
                control={control}
                schema={schema}
                values={values}
                isDisabled={!isDirty || !isValid}
                hasServerError={hasServerError}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
