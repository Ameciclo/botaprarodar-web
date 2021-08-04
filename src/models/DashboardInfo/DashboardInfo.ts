import PieChartDataProps from '../PieChart/PieChartDataProps';

export default interface DashboardInfo {
  communitiesQuantity: number;
  bikesQuantity: number;
  bikesPerCommunities: PieChartDataProps[];
  withdrawalsPerCommunities: PieChartDataProps[];
}
