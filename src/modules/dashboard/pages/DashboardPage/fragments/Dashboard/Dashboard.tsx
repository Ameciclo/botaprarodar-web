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
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DashboardCard
            title="Total de Bicicletas"
            text={dashboardData?.bikesQuantity}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DashboardCard
            title="Comunidades Ameciclo"
            text={`${dashboardData?.communitiesQuantity || 0} comunidades`}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DashboardCard
            title="Viagens e empréstimo"
            text={`${dashboardData?.travelsDone || 0} viagens`}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={12}>
          <DashboardCard
            title="Viagens e empréstimo"
            text={`${dashboardData?.travelsDone || 0} viagens`}
          />
        </Grid>
      </>
      <>
        <Grid item xl={4} lg={4} sm={6} xs={12}>
          <CustomCard
            headerTitle="Taxa de incidentes com ciclistas"
            content={`Foram ${dashboardData?.incidentsHappened} incidentes em ${dashboardData?.travelsDone} viagens`}
          />
        </Grid>
        <Grid item xl={4} lg={4} sm={6} xs={12}>
          <CustomCard
            headerTitle="Taxa de incidentes com ciclistas"
            content={`Foram ${dashboardData?.incidentsHappened} incidentes em ${dashboardData?.travelsDone} viagens`}
          />
        </Grid>
        <Grid item xl={4} lg={4} sm={6} xs={12}>
          <CustomCard
            headerTitle="Taxa de incidentes com ciclistas"
            content={`Foram ${dashboardData?.incidentsHappened} incidentes em ${dashboardData?.travelsDone} viagens`}
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
          <CustomCard headerTitle="Bairros Onde os Ciclistas Residem">
            <VerticalBarChart
              data={dashboardData.withdrawalsReason}
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
