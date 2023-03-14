import Community from 'modules/communities/models/Community';
import ChartDataProps from '../../../shared/models/ChartDataProps';
import { BikesPerCommunities } from './BikesPerCommunities';

export default interface DashboardInfo {
  usersQuantity: number;
  newUsers: number;
  womenUsers: number;
  communitiesQuantity: number;
  bikesQuantity: number;
  bikesInUse: number;
  bikesPerCommunities: BikesPerCommunities[];
  withdrawalsPerCommunities: ChartDataProps[];
  travelsDone: number;
  travelsWithRideGiven: number;
  incidentsHappened: number;
  withdrawalsReason: ChartDataProps[];
  bikersCommunities: ChartDataProps[];
  destination: ChartDataProps[];
  racialInfo: ChartDataProps[];
  gender: ChartDataProps[];
  schooling: ChartDataProps[];
  income: ChartDataProps[];
  age: ChartDataProps[];
  travelTimeInMinutes: number[];
  communities: Community[];
}
