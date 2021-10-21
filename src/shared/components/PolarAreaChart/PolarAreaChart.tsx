import { useTheme } from '@material-ui/core';
import { ChartOptions } from 'chart.js';
import React, { FC, useMemo } from 'react';
import { PolarArea } from 'react-chartjs-2';
import ChartDataProps from 'shared/models/ChartDataProps';
import ColorsUtils from 'shared/utils/ColorsUtils';

interface PolarAreaChartProps {
  data: ChartDataProps[];
}

const PolarAreaChart: FC<PolarAreaChartProps> = ({ data }) => {
  const theme = useTheme();

  const dataChart = useMemo(() => {
    const labels = data?.map(item => item.label);
    const quantities = data?.map(item => item.quantity);
    const colors = ColorsUtils.getColorArrays(data?.length || 0);
    return {
      labels,
      datasets: [
        {
          data: quantities,
          backgroundColor: colors[0],
          borderColor: colors[1],
          borderWidth: 1,
        },
      ],
    };
  }, [data]);

  const options: ChartOptions<'polarArea'> = {
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 2.5,
    datasets: {
      polarArea: {},
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          boxHeight: 20,
          boxWidth: 20,
        },
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        bodyColor: theme.palette.text.primary,
        borderColor: theme.palette.text.hint,
        titleColor: theme.palette.text.primary,
        borderWidth: 1,
        enabled: true,
        intersect: true,
        mode: 'index',
      },
    },
  };

  return <PolarArea data={dataChart} options={options} />;
};

export default PolarAreaChart;
