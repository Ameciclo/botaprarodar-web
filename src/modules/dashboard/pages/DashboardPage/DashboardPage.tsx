import DashboardService from 'modules/dashboard/services/DashboardService';
import React, { FC, useEffect, useState } from 'react';
import { Loading } from 'shared/components';
import DashboardInfo from '../../models/DashboardInfo';
import Dashboard from './fragments/Dashboard/Dashboard';

const INITIAL_DASHBOARD: DashboardInfo = {
  usersQuantity: 0,
  bikesPerCommunities: [{ label: '', quantity: 0, bikes: [] }],
  bikesQuantity: 0,
  communitiesQuantity: 0,
  incidentsHappened: 0,
  travelsDone: 0,
  withdrawalsPerCommunities: [{ label: '', quantity: 0 }],
  withdrawalsReason: [{ label: '', quantity: 0 }],
  bikersCommunities: [{ label: '', quantity: 0 }],
};

const DashboardPage: FC = () => {
  const [dashboardData, setDashboardData] =
    useState<DashboardInfo>(INITIAL_DASHBOARD);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    DashboardService.dashboardInfo()
      .then(data => {
        // eslint-disable-next-line no-console
        console.log(
          '%cMyProject%cline:26%cdata',
          'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
          'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
          'color:#fff;background:rgb(153, 80, 84);padding:3px;border-radius:2px',
          data,
        );
        setDashboardData(data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <Loading /> : <Dashboard dashboardData={dashboardData} />}</>
  );
};

export default DashboardPage;
