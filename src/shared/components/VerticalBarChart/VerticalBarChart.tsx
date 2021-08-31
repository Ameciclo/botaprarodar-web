import { Avatar, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC, useMemo } from 'react';
import ChartDataProps from 'shared/models/ChartDataProps';
import VerticalBarChartStyles from './VerticalBarChart.styles';

interface VerticalBarChartProps {
  data: ChartDataProps[];
}

const VerticalBarChart: FC<VerticalBarChartProps> = ({ data }) => {
  const classes = VerticalBarChartStyles();

  const dataChart = useMemo(() => {
    // eslint-disable-next-line no-console
    console.log(data);
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
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

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
                <Typography className={classes.labelFont}>
                  {item.quantity}
                </Typography>
                <div
                  style={{
                    backgroundColor: colors[colorIndex],
                    height: (100 * item.quantity) / array[0].quantity,
                    width: '-webkit-fill-available',
                    margin: '5px',
                    borderRadius: '10px 10px 0px 0px',
                  }}
                />
                <Typography className={classes.labelFont}>
                  {letters[index]}
                </Typography>
              </div>
            );
          })}
        </div>
        <div>
          <Typography
            className={clsx([
              classes.labelNormalize,
              classes.textJustify,
              classes.margin,
            ])}
          >
            Bairros dos Ciclistas
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {dataChart.map((item, index) => {
                const colorIndex = (index + 1 + 3) % 3;
                if (index < 5) {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '5px',
                      }}
                    >
                      <Avatar
                        className={classes.avatar}
                        variant="rounded"
                        style={{
                          backgroundColor: colors[colorIndex],
                        }}
                      >
                        {letters[index]}
                      </Avatar>
                      <Typography className={classes.labelNormalize}>
                        {item.label}
                      </Typography>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {dataChart.map((item, index) => {
                const colorIndex = (index + 1 + 3) % 3;
                if (index > 4) {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '5px 15px',
                      }}
                    >
                      <Avatar
                        className={classes.avatar}
                        variant="rounded"
                        style={{
                          backgroundColor: colors[colorIndex],
                        }}
                      >
                        {letters[index]}
                      </Avatar>
                      <Typography className={classes.labelNormalize}>
                        {item.label}
                      </Typography>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default VerticalBarChart;
