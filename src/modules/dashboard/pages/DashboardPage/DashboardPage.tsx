import { useGetAuth } from 'modules/authentication/contexts/AuthContext';
import DashboardService from 'modules/dashboard/services/DashboardService';
import React, { FC, useEffect, useState } from 'react';
import { Loading } from 'shared/components';
import DashboardInfo from '../../models/DashboardInfo';
import AdminDashboard from './fragments/AdminDashboard/AdminDashboard';
import PublicDashboard from './fragments/PublicDashboard/PublicDashboard';

const INITIAL_DASHBOARD: DashboardInfo = {
  bikesPerCommunities: [{ label: '', quantity: 0 }],
  bikesQuantity: 0,
  communitiesQuantity: 0,
  incidentsHappened: 0,
  travelsDone: 0,
  withdrawalsPerCommunities: [{ label: '', quantity: 0 }],
  withdrawalsReason: [''],
};

const DashboardPage: FC = () => {
  const [dashboardData, setDashboardData] =
    useState<DashboardInfo>(INITIAL_DASHBOARD);
  const [loading, setLoading] = useState<boolean>(true);
  const { value: auth } = useGetAuth();

  useEffect(() => {
    DashboardService.dashboardInfo()
      .then(data => {
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
    <>
      {loading ? (
        <Loading />
      ) : auth.authenticated ? (
        <AdminDashboard dashboardData={dashboardData} auth={auth} />
      ) : (
        <PublicDashboard dashboardData={dashboardData} />
      )}
    </>
  );
};

export default DashboardPage;
