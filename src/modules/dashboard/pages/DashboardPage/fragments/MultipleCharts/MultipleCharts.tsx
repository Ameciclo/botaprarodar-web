import React, { FC, useState } from 'react';
import { Grid } from '@material-ui/core';
import CustomCard from '../../../../../../shared/components/CustomCard/CustomCard';
import ButtonGrid from '../../components/ButtonGrid/ButtonGrid';
import DashboardButton from '../../components/DashboardButton/DashboardButton';
import PolarAreaChart from '../../../../../../shared/components/PolarAreaChart/PolarAreaChart';
import ChartDataProps from '../../../../../../shared/models/ChartDataProps';

interface MultipleChartsProps {
  labels: string[];
  data: ChartDataProps[][];
}
const MultipleCharts: FC<MultipleChartsProps> = ({ data, labels }) => {
  const [selectedData, setSelectedData] = useState(0);
  return (
    <Grid item xl={12} lg={12} sm={12} xs={12}>
      <CustomCard>
        <ButtonGrid>
          {labels.map((label, index) => {
            return (
              <DashboardButton
                key={`key-${label}`}
                label={label}
                onClick={() => setSelectedData(index)}
              />
            );
          })}
        </ButtonGrid>
        <PolarAreaChart data={data[selectedData]} />
      </CustomCard>
    </Grid>
  );
};
export default MultipleCharts;
