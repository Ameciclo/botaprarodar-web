import { Paper, useTheme } from '@material-ui/core';
import { ChartOptions } from 'chart.js';
import React, { FC, useCallback, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import PieChartProps from './PieChartProps';

const PieChart: FC<PieChartProps> = ({ data, chartLabel }) => {
  const theme = useTheme();

  const getPastelColor = () => {
    const hue = Math.floor(Math.random() * 12) * 30;
    const randomColor = `hsl(${hue}, 70%, 80%)`;
    return randomColor;
  };

  const getColorArray = useCallback((length: number) => {
    const array: string[] = [];

    for (let i = 0; i < length; i += 1) {
      const newColor = getPastelColor();
      if (array.includes(newColor)) {
        i -= 1;
      } else {
        array.push(newColor);
      }
    }
    return array;
  }, []);

  const dataChart = useMemo(() => {
    const labels = data?.map(item => item.label);
    const quantities = data?.map(item => item.quantity);
    const colors = getColorArray(data?.length || 0);
    return {
      labels,
      datasets: [
        {
          data: quantities,
          backgroundColor: colors,
          borderWidth: 1,
        },
      ],
    };
  }, [data, getColorArray]);

  const options: ChartOptions = {
    aspectRatio: 1.3,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: chartLabel,
      },
      legend: {
        display: true,
        position: 'bottom',
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

  return (
    <Paper>
      <Pie data={dataChart} options={options} />
    </Paper>
  );
};

PieChart.defaultProps = {
  data: [],
};

export default PieChart;
