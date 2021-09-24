import { useTheme } from '@material-ui/core';
import { ChartOptions } from 'chart.js';
import React, { FC, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataProps from 'shared/models/ChartDataProps';

interface HorizontalBarChartProps {
  data: ChartDataProps[];
  label: string;
  aspectRatio?: number;
}

const HorizontalBarChart: FC<HorizontalBarChartProps> = ({
  data,
  label,
  aspectRatio = 2,
}) => {
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
          backgroundColor: '#515151',
          borderColor: '#515151',
          borderWidth: 1,
        },
      ],
    };
  }, [data, label]);

  const options: ChartOptions = {
    indexAxis: 'y',
    aspectRatio,
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 2,
      },
    },
    datasets: {
      bar: {
        barThickness: 8,
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

export default HorizontalBarChart;
