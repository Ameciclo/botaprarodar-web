import ChartDataProps from '../../models/ChartDataProps';

export default interface PieChartProps {
  data: ChartDataProps[] | undefined;
  chartWidth?: number;
  chartHeight?: number;
  chartLabel?: string;
}
