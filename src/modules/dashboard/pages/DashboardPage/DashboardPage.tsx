import DashboardService from 'modules/dashboard/services/DashboardService';
import React, { FC, useEffect, useState } from 'react';
import { Loading } from 'shared/components';
import DashboardInfo from '../../models/DashboardInfo';
import Dashboard from './fragments/Dashboard/Dashboard';

const INITIAL_DASHBOARD: DashboardInfo = {
  usersQuantity: 0,
  newUsers: 0,
  womenUsers: 0,
  bikesPerCommunities: [{ label: '', quantity: 0, bikes: [] }],
  bikesQuantity: 0,
  bikesInUse: 0,
  communitiesQuantity: 0,
  incidentsHappened: 0,
  travelsDone: 0,
  travelsWithRideGiven: 0,
  withdrawalsPerCommunities: [{ label: '', quantity: 0 }],
  withdrawalsReason: [{ label: '', quantity: 0 }],
  bikersCommunities: [{ label: '', quantity: 0 }],
  destination: [{ label: '', quantity: 0 }],
  racialInfo: [{ label: '', quantity: 0 }],
  gender: [{ label: '', quantity: 0 }],
  schooling: [{ label: '', quantity: 0 }],
  income: [{ label: '', quantity: 0 }],
  age: [{ label: '', quantity: 0 }],
  travelTimeInMinutes: [],
};

const DashboardPage: FC = () => {
  const [dashboardData, setDashboardData] =
    useState<DashboardInfo>(INITIAL_DASHBOARD);
  const [loading, setLoading] = useState<boolean>(true);

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
    <>{loading ? <Loading /> : <Dashboard dashboardData={dashboardData} />}</>
  );
};

export default DashboardPage;
