import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Bike from 'modules/users/models/Bike';
import BikeService from 'modules/bicycles/services/BikeService';
import useStyles from './SelectBikeCard.styles';

export interface SelectBikeProps {
  values: any;
}

const SelectBikeCard: React.FC<SelectBikeProps> = ({ values }) => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    BikeService.getAllBikes()
      .then(res => {
        setBikes(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={classes.cardPosition}>
      <Typography component="h5" variant="h5" className={classes.titleStyle}>
        Selecione a bicicleta
      </Typography>
      <>
        {bikes?.map(item => {
          return (
            <Card className={classes.root} key={item.name}>
              <CardMedia
                className={classes.cover}
                image={item.photoThumbnailPath}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h3" variant="h3">
                    ORDEM: {item.orderNumber}
                  </Typography>
                  <Typography component="h4" variant="h4" color="textSecondary">
                    {item.name}
                  </Typography>
                  <Typography component="h5" variant="h5" color="textSecondary">
                    SÉRIE: {item.serialNumber}
                  </Typography>
                </CardContent>
                <div className={classes.controls} />
              </div>
            </Card>
          );
        })}
      </>
    </div>
  );
};

export default SelectBikeCard;
