import React, { FC, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomCard from 'shared/components/CustomCard/CustomCard';
import HorizontalBarChart from 'shared/components/HorizontalBarChart/HorizontalBarChart';
import PolarAreaChart from 'shared/components/PolarAreaChart/PolarAreaChart';
import VerticalBarChart from 'shared/components/VerticalBarChart/VerticalBarChart';
import ChartDataProps from 'shared/models/ChartDataProps';
import DashboardButton from '../../components/DashboardButton/DashboardButton';
import ButtonGrid from '../../components/ButtonGrid/ButtonGrid';

interface MultipleChartsProps {
  charts: { label: string; type: string }[];
  data: ChartDataProps[][];
}

interface ChartsObjectInterface {
  [key: string]: FC<any>;
}

const ChartsObject: ChartsObjectInterface = {
  polar: PolarAreaChart,
  'horizontal-bar': HorizontalBarChart,
  'vertical-bar': VerticalBarChart,
};

const MultipleCharts: FC<MultipleChartsProps> = ({ data, charts }) => {
  const [selectedData, setSelectedData] = useState(0);
  return (
    <Grid item xl={12} lg={12} sm={12} xs={12}>
      <CustomCard>
        <ButtonGrid>
          {charts.map(({ label }, index) => {
            return (
              <DashboardButton
                key={`key-${label}`}
                label={label}
                selectedData={selectedData}
                index={index}
                onClick={() => setSelectedData(index)}
              />
            );
          })}
        </ButtonGrid>
        {charts
          .filter((item, index) => index === selectedData)
          .map(({ label, type }) => {
            const Component = ChartsObject[type];

            const props: {
              key: string;
              data: ChartDataProps[];
              label?: string;
              aspectRatio?: number;
            } = {
              key: `key-${type}`,
              data: data[selectedData],
            };

            if (type === 'horizontal-bar') {
              props.label = label;
              props.aspectRatio = 2.5;
            }
            return <Component {...props} key={`key-${type}`} />;
          })}
        <Typography>Quantidade de usuários</Typography>
      </CustomCard>
    </Grid>
  );
};
export default MultipleCharts;
