import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useGetAuth } from 'modules/authentication/contexts/AuthContext';
import DashboardInfo from 'modules/dashboard/models/DashboardInfo';
import CustomCard from 'shared/components/CustomCard/CustomCard';
import DashboardCard from 'shared/components/DashboardCard/DashboardCard';
import HorizontalBarChart from 'shared/components/HorizontalBarChart/HorizontalBarChart';
import VerticalBarChart from 'shared/components/VerticalBarChart/VerticalBarChart';
import TravelTimeCard from '../../components/TravelTimeCard/TravelTimeCard';
import MultipleCharts from '../MultipleCharts/MultipleCharts';
import DonutPercentageCard from '../../components/DonutPercentageCard/DonutPercentageCard';
import DashboardStyles from './Dashboard.styles';

interface DashboardProps {
  dashboardData: DashboardInfo;
}
const Dashboard: FC<DashboardProps> = ({ dashboardData }) => {
  const classes = DashboardStyles();
  const { value: auth } = useGetAuth();
  return (
    <Grid container spacing={1}>
      {auth.authenticated && (
        <Grid item xl={12} lg={12} sm={12} xs={12}>
          <Typography
            className={classes.userTitle}
          >{`Olá, ${auth.displayName}`}</Typography>
        </Grid>
      )}
      <>
        <>
          <Grid item xl={12} lg={12} sm={12} xs={12}>
            <TravelTimeCard travelTime={dashboardData.travelTimeInMinutes} />
          </Grid>
        </>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DashboardCard
            title="Total de Bicicletas"
            text={`${dashboardData?.bikesQuantity || 0} Bicicletas`}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DashboardCard
            title="Ciclistas cadastradas"
            text={`${dashboardData?.usersQuantity || 0} Ciclistas`}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DashboardCard
            title="Bicicletas em uso"
            text={`${dashboardData?.bikesInUse || 0} Emprestadas`}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DashboardCard
            title="Viagens e empréstimo"
            text={`${dashboardData?.travelsDone || 0} Viagens`}
          />
        </Grid>
      </>
      <>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DonutPercentageCard
            title="Taxa de incidentes com ciclistas"
            partial={dashboardData.incidentsHappened}
            total={dashboardData.travelsDone}
            labelPartial="incidentes"
            labelTotal="viagens"
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DonutPercentageCard
            title="Viagens com carona"
            partial={dashboardData.travelsWithRideGiven}
            total={dashboardData.travelsDone}
            labelPartial="com carona"
            labelTotal="viagens"
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DonutPercentageCard
            title="Mulheres ciclistas"
            partial={dashboardData.womenUsers}
            total={dashboardData.usersQuantity}
            labelPartial="mulheres"
            labelTotal="total"
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DonutPercentageCard
            title="Novos Ciclistas"
            partial={dashboardData.newUsers}
            total={dashboardData.usersQuantity}
            labelPartial="Novos Ciclistas"
            labelTotal="Já eram ciclistas"
          />
        </Grid>
      </>
      <>
        <Grid item xl={6} lg={6} sm={12} xs={12}>
          <CustomCard headerTitle="Uso das Bicicletas durante os Empréstimos">
            <HorizontalBarChart
              data={dashboardData.withdrawalsReason}
              label="Ciclistas das Comunidades da Ameciclo"
            />
          </CustomCard>
        </Grid>
        <Grid item xl={6} lg={6} sm={12} xs={12}>
          <CustomCard headerTitle="Destinos dos ciclistas">
            <VerticalBarChart data={dashboardData.destination} />
          </CustomCard>
        </Grid>
      </>
      <>
        <MultipleCharts
          data={[
            dashboardData.racialInfo,
            dashboardData.gender,
            dashboardData.schooling,
            dashboardData.age,
            dashboardData.income,
          ]}
          charts={[
            { label: 'Raça', type: 'polar' },
            { label: 'Gênero', type: 'polar' },
            { label: 'Escolaridade', type: 'polar' },
            { label: 'Idade', type: 'horizontal-bar' },
            { label: 'Renda', type: 'horizontal-bar' },
          ]}
        />
      </>
    </Grid>
  );
};

export default Dashboard;
