import Bike from 'modules/bicycles/models/Bike';
import ChartDataProps from 'shared/models/ChartDataProps';

export interface BikesPerCommunities extends ChartDataProps {
  label: string;
  quantity: number;
  bikes: Bike[];
}
