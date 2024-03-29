import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import {
  GenderEnum,
  IncomeEnum,
  RacialEnum,
  SchoolingEnum,
  SchoolingStatusEnum,
} from 'modules/users/models/enums';
import { Select } from 'shared/components';
import { FormValues } from '../../RegisterUserForm.schema';
import useStyles from './SocialInfoForm.styles';

type Values = Pick<
  FormValues,
  'schooling' | 'gender' | 'race' | 'income' | 'schoolingStatus'
>;
export interface Props {
  onChange: any;
  values: Values;
}

const SocialInfoForm: React.FC<Props> = ({ values, onChange }) => {
  const classes = useStyles();
  const hasSchoolingValue = values?.schooling;
  const hasChoosenNotInformed =
    hasSchoolingValue && values.schooling === SchoolingEnum.NotInformed;
  const hasLessThanAYear =
    hasSchoolingValue && values.schooling === SchoolingEnum.SemOuMenosDeUmAno;
  const shouldShowExtraField =
    hasSchoolingValue && !hasChoosenNotInformed && !hasLessThanAYear;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.titleStyle}>
          Dados sociais
        </Typography>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <Select
              id="gender"
              label="Gênero"
              name="gender"
              dataTestId="gender-test"
              value={values?.gender || GenderEnum.notDeclared}
              onChange={onChange}
              options={[
                {
                  value: GenderEnum.female,
                  text: GenderEnum.female,
                },
                {
                  value: GenderEnum.male,
                  text: GenderEnum.male,
                },
                {
                  value: GenderEnum.other,
                  text: GenderEnum.other,
                },
                {
                  value: GenderEnum.notDeclared,
                  text: GenderEnum.notDeclared,
                },
              ]}
            />
          </Grid>
          <Grid item>
            <Select
              id="race"
              label="Raça"
              name="race"
              dataTestId="race-test"
              value={values?.race || RacialEnum.notInformed}
              onChange={onChange}
              options={[
                {
                  value: RacialEnum.asian,
                  text: RacialEnum.asian,
                },
                {
                  value: RacialEnum.black,
                  text: RacialEnum.black,
                },
                {
                  value: RacialEnum.brown,
                  text: RacialEnum.brown,
                },
                {
                  value: RacialEnum.indigenous,
                  text: RacialEnum.indigenous,
                },
                {
                  value: RacialEnum.white,
                  text: RacialEnum.white,
                },
                {
                  value: RacialEnum.notInformed,
                  text: RacialEnum.notInformed,
                },
              ]}
            />
          </Grid>
          <Grid item>
            <Select
              id="income"
              label="Qual sua renda?"
              name="income"
              dataTestId="income-test"
              value={values?.income || IncomeEnum.notInformed}
              onChange={onChange}
              options={[
                {
                  value: IncomeEnum.until150,
                  text: '0-R$150',
                },
                {
                  value: IncomeEnum.from150To300,
                  text: 'R$150-R$300',
                },
                {
                  value: IncomeEnum.from500To700,
                  text: 'R$500-R$700',
                },
                {
                  value: IncomeEnum.from750To1100,
                  text: 'R$750-R$1100',
                },
                {
                  value: IncomeEnum.from1100To2000,
                  text: 'R$1100-R$2000',
                },
                {
                  value: IncomeEnum.above2000,
                  text: '+R$2000',
                },
                {
                  value: IncomeEnum.notInformed,
                  text: IncomeEnum.notInformed,
                },
              ]}
            />
          </Grid>
          <Grid item>
            <Select
              id="schooling"
              label="Grau de instrução"
              name="schooling"
              dataTestId="schooling-test"
              value={values?.schooling || SchoolingEnum.NotInformed}
              onChange={onChange}
              options={[
                {
                  value: SchoolingEnum.EnsinoFundamental1,
                  text: SchoolingEnum.EnsinoFundamental1,
                },
                {
                  value: SchoolingEnum.EnsinoFundamental2,
                  text: SchoolingEnum.EnsinoFundamental2,
                },
                {
                  value: SchoolingEnum.EnsinoMedio,
                  text: SchoolingEnum.EnsinoMedio,
                },
                {
                  value: SchoolingEnum.EnsinoSuperior,
                  text: SchoolingEnum.EnsinoSuperior,
                },
                {
                  value: SchoolingEnum.EnsinoTecnico,
                  text: SchoolingEnum.EnsinoTecnico,
                },
                {
                  value: SchoolingEnum.SemOuMenosDeUmAno,
                  text: SchoolingEnum.SemOuMenosDeUmAno,
                },
                {
                  value: SchoolingEnum.NotInformed,
                  text: SchoolingEnum.NotInformed,
                },
              ]}
            />
          </Grid>
          {shouldShowExtraField && (
            <Grid item xs={12} sm={6} md={6}>
              <Select
                id="schoolingStatus"
                label="Concluiu o grau acima?"
                name="schoolingStatus"
                dataTestId="schooling-status-test"
                value={values?.schoolingStatus || SchoolingStatusEnum.Sim}
                onChange={onChange}
                options={[
                  {
                    value: SchoolingStatusEnum.InProgress,
                    text: SchoolingStatusEnum.InProgress,
                  },
                  {
                    value: SchoolingStatusEnum.Nao,
                    text: SchoolingStatusEnum.Nao,
                  },
                  {
                    value: SchoolingStatusEnum.Sim,
                    text: SchoolingStatusEnum.Sim,
                  },
                ]}
              />
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SocialInfoForm;
