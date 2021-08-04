import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import {
  Chart,
  Legend,
  PieSeries,
  Title,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import PieChartDataProps from '../../models/PieChart/PieChartDataProps';
import PieChartProps from '../../models/PieChart/PieChartProps';
import './PieChart.css';

const PieChart: FC<PieChartProps> = ({
  data,
  chartHeight,
  chartWidth,
  chartLabel,
}) => {
  const [chartData, setChartData] = useState<PieChartDataProps[]>([]);

  useEffect(() => {
    setChartData(data || []);
  }, [data]);

  return (
    <Paper>
      <Chart data={chartData} width={chartWidth} height={chartHeight}>
        <PieSeries valueField="quantity" argumentField="label" />
        {chartLabel && <Title text={chartLabel} />}
        <Animation />
        <Legend />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  );
};

export default PieChart;
