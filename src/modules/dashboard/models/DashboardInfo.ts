import ChartDataProps from '../../../shared/models/ChartDataProps';

export default interface DashboardInfo {
  communitiesQuantity: number;
  bikesQuantity: number;
  bikesPerCommunities: ChartDataProps[];
  withdrawalsPerCommunities: ChartDataProps[];
  travelsDone: number;
  incidentsHappened: number;
  withdrawalsReason: ChartDataProps[];
  bikersCommunities: ChartDataProps[];
}
