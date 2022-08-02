import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Input } from 'shared/components';
import useStyles from './PersonalInfoForm.styles';

interface PersonalInfoFormProps {
  control: any;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ control }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.personalInfoTitle}>
          Informações pessoais
        </Typography>
        <Grid container spacing={3} className={classes.personalInfoLayout}>
          <Grid item xs={6}>
            <Input
              label="Nome do usuário"
              type="text"
              name="name"
              className="userName"
              control={control}
              dataTestId="name-test"
              defaultValue=""
              rules={{ required: 'Nome do usuário é obrigatório' }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Endereço completo"
              type="text"
              name="address"
              className="address"
              control={control}
              dataTestId="address-test"
              defaultValue=""
              rules={{ required: 'Endereço do usuário é obrigatório' }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Input
              label="Nº do celular"
              type="text"
              name="phone"
              className="input"
              control={control}
              dataTestId="phone-test"
              defaultValue=""
              rules={{ required: 'Telefone do usuário é obrigatório' }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Input
              label="Data do nascimento"
              type="text"
              name="birthday"
              className="input"
              control={control}
              dataTestId="birthday-test"
              defaultValue=""
              rules={{ required: 'Data de nascimento é obrigatório' }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Input
              label="Foto de Perfil"
              type="text"
              name="birthday"
              className="input"
              control={control}
              dataTestId="profilePicture-test"
              defaultValue=""
              rules={{ required: 'Foto de perfil é obrigatória' }}
            />
            <Button>Escolher Arquivo</Button>
          </Grid>
          <Grid item xs={6}>
            <Button>CANCELAR</Button>
            <Button>PRÓXIMO</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
