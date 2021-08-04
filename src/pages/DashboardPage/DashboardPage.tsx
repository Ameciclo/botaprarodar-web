import { Paper } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import PieChart from '../../components/PieChart/PieChart';
import DashboardInfo from '../../models/DashboardInfo/DashboardInfo';
import DashboardService from '../../services/DashboardService/DashboardService';

const DashboardPage: FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardInfo>();

  useEffect(() => {
    DashboardService.dashboardInfo().then(data => {
      // eslint-disable-next-line no-console
      console.log(data);
      setDashboardData(data);
    });
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flex: '1', flexDirection: 'column' }}>
        <div
          style={{ display: 'flex', flex: '1', justifyContent: 'space-around' }}
        >
          <Paper style={{ padding: '10px' }}>
            <div>Quantidade de Bicicletas</div>
            <div>{dashboardData?.bikesQuantity || 0}</div>
          </Paper>
          <Paper style={{ padding: '10px' }}>
            <div>Quantidade de Comunidades</div>
            <div>{dashboardData?.communitiesQuantity || 0}</div>
          </Paper>
        </div>
        <div
          style={{ display: 'flex', flex: '1', justifyContent: 'space-around' }}
        >
          <PieChart
            data={dashboardData?.bikesPerCommunities}
            chartLabel="Bicicletas por comunidades"
          />
          <PieChart
            data={dashboardData?.withdrawalsPerCommunities}
            chartLabel="Movimentações por comunidades"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
