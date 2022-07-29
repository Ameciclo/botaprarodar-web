import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Input } from 'shared/components';

interface PersonalInfoFormProps {
  control: any;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ control }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Informações pessoais</Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <Input
              label="Nome do usuário"
              type="text"
              name="name"
              className="userName"
              control={control}
              dataTestId="name-test"
              defaultValue=""
              rules={{ required: 'Nome do usuário é obrigatório' }}
            />
          </Grid>
          <Grid item>
            <Input
              label="Endereço completo"
              type="text"
              name="address"
              className="address"
              control={control}
              dataTestId="address-test"
              defaultValue=""
              rules={{ required: 'Endereço do usuário é obrigatório' }}
            />
          </Grid>
          <Grid item>
            <Input
              label="Nº do celular"
              type="text"
              name="phone"
              className="input"
              control={control}
              dataTestId="phone-test"
              defaultValue=""
              rules={{ required: 'Telefone do usuário é obrigatório' }}
            />
          </Grid>
          <Grid item>
            <Input
              label="Data do nascimento"
              type="text"
              name="birthday"
              className="input"
              control={control}
              dataTestId="birthday-test"
              defaultValue=""
              rules={{ required: 'Data de nascimento é obrigatório' }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
