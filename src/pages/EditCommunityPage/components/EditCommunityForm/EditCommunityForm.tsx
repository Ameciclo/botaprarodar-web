import React from 'react';
import { Button, Card, CardHeader, CardContent, Grid } from '@material-ui/core';
import Community from 'models/Community/Community';
import { useForm } from 'react-hook-form';
import { Input } from 'components';
import useStyles from './EditCommunityForm.styles';

interface EditCommunitiProps {
  community?: Community;
}

const EditCommunityForm: React.FC<EditCommunitiProps> = () => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Informações da comunidade"
        className={classes.header}
      />
      <hr />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12}>
              <Input
                label="Node da comunidade"
                type="text"
                name="name"
                className={classes.input}
                control={control}
                dataTestId="name"
                rules={{ required: 'Nome da comunidade é obrigatório' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Descrição"
                type="text"
                name="description"
                className={classes.input}
                control={control}
                dataTestId="description"
                rules={{ required: 'Descrição da comunidade é obrigatória' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Nome do Gestor"
                type="text"
                name="org_name"
                className={classes.input}
                control={control}
                dataTestId="org_name"
                rules={{ required: 'Nome do gestor é obrigatório' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="E-mail do Gestor"
                type="email"
                name="org_email"
                className={classes.input}
                control={control}
                dataTestId="org_email"
                rules={{
                  required: 'E-mail do gestor é obrigatório',
                }}
              />
            </Grid>
          </Grid>
          <hr className={classes.buttonSeparator} />
          <Button
            data-testid="submit-button"
            type="submit"
            className={`${classes.buttonStyle}`}
          >
            SALVAR ALTERAÇÕES
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditCommunityForm;
