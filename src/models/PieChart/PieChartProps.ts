import PieChartDataProps from './PieChartDataProps';

export default interface PieChartProps {
  data: PieChartDataProps[] | undefined;
  chartWidth?: number;
  chartHeight?: number;
  chartLabel?: string;
}
