import { useTheme } from '@material-ui/core';
import { ChartOptions } from 'chart.js';
import React, { FC, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataProps from 'shared/models/ChartDataProps';

interface VerticalBarChartProps {
  data: ChartDataProps[];
  label: string;
}

const VerticalBarChart: FC<VerticalBarChartProps> = ({ data, label }) => {
  const theme = useTheme();

  const dataChart = useMemo(() => {
    const labels = data?.map(item => item.label);
    const quantities = data?.map(item => item.quantity);
    return {
      labels,
      datasets: [
        {
          label,
          data: quantities,
          backgroundColor: ['#018786', '#17A8A7', '#036867'],
          borderColor: ['#018786', '#17A8A7', '#036867'],
          borderWidth: 1,
        },
      ],
    };
  }, [data, label]);

  const options: ChartOptions = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 10,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          boxHeight: 20,
          boxWidth: 20,
        },
      },
      title: {
        display: false,
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
  return <Bar data={dataChart} options={options} />;
};

export default VerticalBarChart;
