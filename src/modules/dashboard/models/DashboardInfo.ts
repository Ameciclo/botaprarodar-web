import ChartDataProps from '../../../shared/models/ChartDataProps';
import { BikesPerCommunities } from './BikesPerCommunities';

export default interface DashboardInfo {
  communitiesQuantity: number;
  bikesQuantity: number;
  bikesPerCommunities: BikesPerCommunities[];
  withdrawalsPerCommunities: ChartDataProps[];
  travelsDone: number;
  incidentsHappened: number;
  withdrawalsReason: ChartDataProps[];
  bikersCommunities: ChartDataProps[];
}
