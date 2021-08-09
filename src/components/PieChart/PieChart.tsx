import { Paper, useTheme } from '@material-ui/core';
import React, { FC, useCallback, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import PieChartProps from '../../models/PieChart/PieChartProps';
import './PieChart.css';

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

  const datachart = useMemo(() => {
    const labels = data?.map(item => item.label);
    const quantities = data?.map(item => item.quantity);
    const colors = getColorArray(data?.length || 0);
    // eslint-disable-next-line no-console
    console.log('colors', colors);
    return {
      labels,
      datasets: [
        {
          label: 'Teste',
          data: quantities,
          backgroundColor: colors,
          borderWidth: 1,
        },
      ],
    };
  }, [data, getColorArray]);

  const options = {
    plugins: {
      title: {
        display: true,
        text: chartLabel,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltips: {
        backgroundColor: theme.palette.background.paper,
        bodyFontColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        enabled: true,
        footerFontColor: theme.palette.text.secondary,
        intersect: false,
        mode: 'index',
        titleFontColor: theme.palette.text.primary,
      },
    },
  };

  return (
    <Paper>
      <Pie data={datachart} options={options} />
    </Paper>
  );
};

PieChart.defaultProps = {
  data: [],
};

export default PieChart;
