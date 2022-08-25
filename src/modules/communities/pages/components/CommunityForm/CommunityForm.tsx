import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import Community from 'modules/communities/models/Community';
import { Input, toast } from 'shared/components';
import CommunityService from 'modules/communities/services/CommunityService';
import useStyles from './CommunityForm.styles';

interface Props {
  community?: Community;
}

const CommunityForm: React.FC<Props> = ({ community }) => {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, control } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: any) => {
    if (community?.id) {
      setLoading(true);
      CommunityService.editCommunityById(community.id, {
        ...community,
        ...data,
      })
        .then(() => {
          history.goBack();
          toast.success('Comunidade editada com sucesso.');
        })
        .catch(() => {
          toast.error('Serviço indisponível');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      CommunityService.createCommunity({
        ...community,
        ...data,
        id: uuidv4(),
      })
        .then(() => {
          history.goBack();
          toast.success('Comunidade criada com sucesso.');
        })
        .catch(() => {
          toast.error('Serviço indisponível');
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
                label="Nome da comunidade"
                type="text"
                name="name"
                className={classes.input}
                control={control}
                dataTestId="name-test"
                defaultValue={community?.name}
                rules={{ required: 'Nome da comunidade é obrigatório' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Nome do Gestor"
                type="text"
                name="org_name"
                className={classes.input}
                control={control}
                dataTestId="org-name"
                defaultValue={community?.org_name}
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
                dataTestId="org-email"
                defaultValue={community?.org_email}
                rules={{
                  required: 'E-mail do gestor é obrigatório',
                }}
              />
            </Grid>
          </Grid>
          <hr className={classes.buttonSeparator} />
          <Button
            data-testid="cancel-button"
            type="button"
            className={`${classes.buttonCancel}`}
            onClick={() => history.goBack()}
          >
            CANCELAR
          </Button>
          <Button
            data-testid="submit-button"
            type="submit"
            className={`${classes.buttonStyle}`}
            disabled={loading}
            startIcon={
              loading ? (
                <CircularProgress style={{ width: 23, height: 23 }} />
              ) : (
                ''
              )
            }
          >
            {loading ? 'CARREGANDO' : 'SALVAR ALTERAÇÕES'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

CommunityForm.defaultProps = {
  community: {
    id: '',
    address: '',
    created_date: new Date(),
    description: '',
    name: '',
    org_email: '',
    org_name: '',
    bicycles: [],
    withdrawals: [],
  },
};

export default CommunityForm;
