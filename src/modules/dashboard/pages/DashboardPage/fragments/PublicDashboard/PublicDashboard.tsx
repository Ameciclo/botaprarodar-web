import { Grid } from '@material-ui/core';
import DashboardInfo from 'modules/dashboard/models/DashboardInfo';
import React, { FC } from 'react';
import { PieChart } from 'shared/components';
import CustomCard from 'shared/components/CustomCard/CustomCard';
import DashboardCard from 'shared/components/DashboardCard/DashboardCard';

interface PublicDashboardProps {
  dashboardData: DashboardInfo;
}
const PublicDashboard: FC<PublicDashboardProps> = ({ dashboardData }) => {
  return (
    <Grid container spacing={1}>
      <>
        <Grid item xl={6} lg={6} sm={6} xs={12}>
          <DashboardCard
            title="Total de Bicicletas"
            text={dashboardData?.bikesQuantity}
          />
        </Grid>
        {/* <Grid item xl={3} lg={3} sm={6}  xs={12}>
        <DashboardCard
          title="Bicicletas em Manutenção"
          text={`${dashboardData?.bikesQuantity || 0} em manutenção`}
        />
      </Grid> */}
        <Grid item xl={6} lg={6} sm={6} xs={12}>
          <DashboardCard
            title="Comunidades Ameciclo"
            text={`${dashboardData?.communitiesQuantity || 0} comunidades`}
          />
        </Grid>
        {/* <Grid item xl={3} lg={3} sm={6}  xs={12}>
        <DashboardCard
          title="Bicicletas em desuso"
          text={dashboardData?.bikesQuantity}
        />
      </Grid> */}
      </>
      <>
        <Grid item xl={4} lg={4} sm={6} xs={12} />
        <Grid item xl={4} lg={4} sm={6} xs={12}>
          <CustomCard
            headerTitle="Taxa de incidentes com ciclistas"
            content={`Foram ${dashboardData?.incidentsHappened} incidentes em ${dashboardData?.travelsDone} viagens`}
          />
        </Grid>
        <Grid item xl={4} lg={4} sm={6} xs={12} />
      </>
      <>
        <Grid item xl={8} lg={8} sm={6} xs={12}>
          <CustomCard
            headerTitle="Uso das Bicicletas durante os Empréstimos"
            content="gráfico"
          />
        </Grid>
        <Grid item xl={4} lg={4} sm={6} xs={12} />
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

export default PublicDashboard;
