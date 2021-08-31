import { Grid, Typography } from '@material-ui/core';
import { BarDatum } from '@nivo/bar';
import React, { FC, useMemo } from 'react';
import ChartDataProps from 'shared/models/ChartDataProps';

interface VerticalBarChartProps {
  data: ChartDataProps[];
}

const VerticalBarChart: FC<VerticalBarChartProps> = ({ data }) => {
  const dataChart = useMemo(() => {
    // eslint-disable-next-line no-console
    console.log(data);
    data.sort((a, b) => b.quantity - a.quantity) as unknown as BarDatum[];
    return [
      { quantity: 110, label: 'Comunidade 1' },
      { quantity: 90, label: 'Comunidade 2' },
      { quantity: 80, label: 'Comunidade 3' },
      { quantity: 70, label: 'Comunidade 4' },
      { quantity: 60, label: 'Comunidade 5' },
      { quantity: 50, label: 'Comunidade 6' },
      { quantity: 40, label: 'Comunidade 7' },
      { quantity: 30, label: 'Comunidade 8' },
      { quantity: 20, label: 'Comunidade 9' },
      { quantity: 10, label: 'Comunidade 10' },
    ];
  }, [data]);

  const colors = ['#036867', '#018786', '#17A8A7'];

  return (
    <Grid container>
      <Grid container direction="column">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {dataChart.map((item, index, array) => {
            const colorIndex = (index + 1 + 3) % 3;
            return (
              <div
                style={{
                  width: '-webkit-fill-available',
                  alignSelf: 'flex-end',
                }}
              >
                <Typography>{item.quantity}</Typography>
                <div
                  style={{
                    backgroundColor: colors[colorIndex],
                    height: (150 * item.quantity) / array[0].quantity,
                    width: '-webkit-fill-available',
                    margin: '5px',
                    borderRadius: '10px 10px 0px 0px',
                  }}
                />
              </div>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default VerticalBarChart;
