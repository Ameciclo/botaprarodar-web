import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import CustomCard from '../../../../../shared/components/CustomCard/CustomCard';

interface DonutProps {
  title: string;
  total: number;
  partial: number;
  labelTotal: string;
  labelPartial: string;
}

const DonutPercentageCard: React.FC<DonutProps> = ({
  title,
  total,
  partial,
  labelTotal,
  labelPartial,
}) => {
  const initialState = {
    series: [partial, total - partial],
    options: {
      colors: ['#1C1C28', '#828282'],
      stroke: {
        width: 0,
      },
      dataLabels: {
        formatter() {
          return '';
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: `${Math.trunc((partial / total) * 100)} %`,
                fontSize: '20px',
                formatter() {
                  return '';
                },
              },
            },
          },
        },
      },
      labels: [`${partial} ${labelPartial}`, `${total} ${labelTotal}`],
    },
  };

  const [state, setState] = useState(initialState);

  return (
    <CustomCard
      headerTitle={title}
      content={
        <div>
          <Chart type="donut" options={state.options} series={state.series} />
        </div>
      }
    />
  );
};

export default DonutPercentageCard;
