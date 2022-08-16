import { Card, CardContent, Grid, Typography } from '@material-ui/core';
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
        <Typography variant="h5" className={classes.titleStyle}>
          Informações pessoais
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={6} sm={6} md={6}>
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
              mask="phone"
              className="input"
              control={control}
              dataTestId="phone-test"
              defaultValue=""
              rules={{ required: 'Telefone do usuário é obrigatório' }}
              fullWidth
            />
            <Typography variant="caption" display="block" gutterBottom>
              DDD + Número
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
