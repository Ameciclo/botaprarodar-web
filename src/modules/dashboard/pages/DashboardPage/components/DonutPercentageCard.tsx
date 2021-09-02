import React from 'react';
import { Grid } from '@material-ui/core';
import { StopRounded } from '@material-ui/icons';
import Chart from 'react-apexcharts';
import CustomCard from '../../../../../shared/components/CustomCard/CustomCard';
import DonutPercentageCardStyles from './DonutPercentageCard.styles';

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
  const classes = DonutPercentageCardStyles();
  const initialStateOptions = {
    series: [Math.trunc((partial / total) * 100)],
    colors: ['#1C1C28'],
    chart: {
      height: 400,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          background: '#828282',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '28px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            show: true,
            offsetY: 8,
          },
        },
      },
    },
  };

  return (
    <CustomCard
      headerTitle={title}
      content={
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <Chart
              type="radialBar"
              options={{ ...initialStateOptions, stroke: { lineCap: 'round' } }}
              series={initialStateOptions.series}
            />
          </Grid>
          <Grid item xs={4}>
            <div className={classes.label}>
              <div className={classes.partialValue}>
                <StopRounded
                  fontSize="large"
                  className={classes.squareIconLabel}
                />
                {partial}
              </div>
              <span className={classes.partialValueLabel}>{labelPartial}</span>
            </div>
            <div className={classes.label}>
              <div className={classes.totalValue}>
                <StopRounded
                  fontSize="large"
                  className={classes.squareIconLabel}
                />
                {total}
              </div>
              <span className={classes.totalValueLabel}>{labelTotal}</span>
            </div>
          </Grid>
        </Grid>
      }
    />
  );
};

export default DonutPercentageCard;
