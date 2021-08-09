import { Grid } from '@material-ui/core';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import React, { FC, useEffect, useState } from 'react';
import CommunitiesIcon from '../../assets/icons/CommunitiesIcon';
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import PieChart from '../../components/PieChart/PieChart';
import DashboardInfo from '../../models/DashboardInfo/DashboardInfo';
import DashboardService from '../../services/DashboardService/DashboardService';
import Colors from '../../styles/colors';

const DashboardPage: FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardInfo>();

  useEffect(() => {
    DashboardService.dashboardInfo().then(data => {
      setDashboardData(data);
    });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item lg={6} sm={6} xl={6} xs={12}>
        <DashboardCard
          title="Quantidade de Bicicletas"
          text={dashboardData?.bikesQuantity}
          icon={DirectionsBikeIcon}
          iconColor={Colors.Teal[500]}
        />
      </Grid>
      <Grid item lg={6} sm={6} xl={6} xs={12}>
        <DashboardCard
          title="Quantidade de Comunidades"
          text={dashboardData?.communitiesQuantity}
          icon={CommunitiesIcon}
          iconColor={Colors.Teal[500]}
        />
      </Grid>

      <Grid item lg={6} sm={6} xl={6} xs={12}>
        <PieChart
          data={dashboardData?.bikesPerCommunities}
          chartLabel="Bicicletas por comunidades"
        />
      </Grid>
      <Grid item lg={6} sm={6} xl={6} xs={12}>
        <PieChart
          data={dashboardData?.withdrawalsPerCommunities}
          chartLabel="Movimentações por comunidades"
        />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
