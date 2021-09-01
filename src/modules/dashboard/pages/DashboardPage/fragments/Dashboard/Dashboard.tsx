import { Grid, Typography } from '@material-ui/core';
import { useGetAuth } from 'modules/authentication/contexts/AuthContext';
import DashboardInfo from 'modules/dashboard/models/DashboardInfo';
import React, { FC } from 'react';
import { PieChart } from 'shared/components';
import CustomCard from 'shared/components/CustomCard/CustomCard';
import DashboardCard from 'shared/components/DashboardCard/DashboardCard';
import HorizontalBarChart from 'shared/components/HorizontalBarChart/HorizontalBarChart';
import VerticalBarChart from 'shared/components/VerticalBarChart/VerticalBarChart';
import DashboardStyles from './Dashboard.styles';
import DonutPercentageCard from '../../components/DonutPercentageCard';

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
        <Grid item xl={3} lg={3} sm={6} xs={9}>
          <DashboardCard
            title="Total de Bicicletas"
            text={`${dashboardData?.bikesQuantity || 0} Bicicletas`}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={9}>
          <DashboardCard
            title="Ciclistas cadastradas"
            text={`${dashboardData?.usersQuantity || 0} Ciclistas`}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={9}>
          <DashboardCard
            title="Bicicletas em uso"
            text={`${dashboardData?.bikesInUse || 0} Emprestadas`}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={9}>
          <DashboardCard
            title="Viagens e empréstimo"
            text={`${dashboardData?.travelsDone || 0} Viagens`}
          />
        </Grid>
      </>
      <>
        <Grid item xl={3} lg={3} sm={6} xs={9}>
          <DonutPercentageCard
            title="Taxa de incidentes com ciclistas"
            partial={dashboardData.incidentsHappened}
            total={dashboardData.travelsDone}
            labelPartial="incidentes"
            labelTotal="viagens"
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={9}>
          <DonutPercentageCard
            title="Viagens com carona"
            partial={dashboardData.travelsWithRideGiven}
            total={dashboardData.travelsDone}
            labelPartial="com carona"
            labelTotal="viagens"
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={9}>
          <DonutPercentageCard
            title="Mulheres ciclistas"
            partial={dashboardData.womenUsers}
            total={dashboardData.usersQuantity}
            labelPartial="mulheres"
            labelTotal="outros"
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={9}>
          <DonutPercentageCard
            title="Novas pessoas usuárias de bicicleta"
            partial={dashboardData.newUsers}
            total={dashboardData.usersQuantity}
            labelPartial="novas"
            labelTotal="já utilizavam"
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
            <VerticalBarChart
              data={dashboardData.destination}
              // label="Ciclistas das Comunidades da Ameciclo"
            />
          </CustomCard>
        </Grid>
      </>
      <>
        <Grid item xl={6} lg={6} sm={12} xs={12}>
          <PieChart
            data={dashboardData?.bikesPerCommunities}
            chartLabel="Bicicletas por comunidades"
          />
        </Grid>
        <Grid item xl={6} lg={6} sm={12} xs={12}>
          <PieChart
            data={dashboardData?.withdrawalsPerCommunities}
            chartLabel="Movimentações por comunidades"
          />
        </Grid>
      </>
    </Grid>
  );
};

export default Dashboard;
