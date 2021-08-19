import { Grid } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import PieChart from '../../components/PieChart/PieChart';
import DashboardInfo from '../../models/DashboardInfo/DashboardInfo';
import DashboardService from '../../services/DashboardService/DashboardService';

const DashboardPage: FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardInfo>();

  useEffect(() => {
    DashboardService.dashboardInfo().then(data => {
      setDashboardData(data);
    });
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item lg={6} sm={6} xl={6} xs={12}>
        <DashboardCard
          title="Total de Bicicletas"
          text={dashboardData?.bikesQuantity}
        />
      </Grid>
      {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
        <DashboardCard
          title="Bicicletas em Manutenção"
          text={`${dashboardData?.bikesQuantity || 0} em manutenção`}
        />
      </Grid> */}
      <Grid item lg={6} sm={6} xl={6} xs={12}>
        <DashboardCard
          title="Comunidades Ameciclo"
          text={`${dashboardData?.communitiesQuantity || 0} comunidades`}
        />
      </Grid>
      {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
        <DashboardCard
          title="Bicicletas em desuso"
          text={dashboardData?.bikesQuantity}
        />
      </Grid> */}
      <Grid item lg={6} sm={12} xl={6} xs={12}>
        <PieChart
          data={dashboardData?.bikesPerCommunities}
          chartLabel="Bicicletas por comunidades"
        />
      </Grid>
      <Grid item lg={6} sm={12} xl={6} xs={12}>
        <PieChart
          data={dashboardData?.withdrawalsPerCommunities}
          chartLabel="Movimentações por comunidades"
        />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
