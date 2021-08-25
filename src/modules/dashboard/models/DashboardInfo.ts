import PieChartDataProps from '../../../shared/components/PieChart/PieChartDataProps';

export default interface DashboardInfo {
  communitiesQuantity: number;
  bikesQuantity: number;
  bikesPerCommunities: PieChartDataProps[];
  withdrawalsPerCommunities: PieChartDataProps[];
  travelsDone: number;
  incidentsHappened: number;
  withdrawalsReason: string[];
}
