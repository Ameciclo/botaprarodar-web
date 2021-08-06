import React, { FC, useEffect, useState } from 'react';
import DashboardCard from '../../components/DashboardCard/DashboardCard';
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
          style={{
            display: 'flex',
            flex: '1',
            justifyContent: 'space-around',
            marginBottom: '10px',
          }}
        >
          <DashboardCard
            title="Quantidade de Bicicletas"
            text={dashboardData?.bikesQuantity}
          />
          <DashboardCard
            title="Quantidade de Comunidades"
            text={dashboardData?.communitiesQuantity}
          />
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
