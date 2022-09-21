import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router-dom';
import Bike from 'modules/users/models/Bike';
import BikeService from 'modules/bicycles/services/BikeService';
import toast from 'shared/components/Toast/Toast';
import { Loading } from 'shared/components';
import useStyles from './SelectBikePage.styles';

export interface SelectBikeProps {
  communityId: string;
  actionType?: 'devolution' | 'withdraw' | null | undefined;
}

const SelectBikeCard: React.FC<SelectBikeProps> = ({
  communityId,
  actionType,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const nextStepBike = (selectedBike: string) => {
    const params = { communityId, selectedBike };
    let path = '';

    if (actionType === 'devolution') {
      path = '/comunidades/devolver-bicicleta/questionario';
    }

    if (actionType === 'withdraw') {
      path = '/comunidades/emprestar-bicicleta';
    }

    history.push(path, params);
  };

  useEffect(() => {
    BikeService.getBikesPerCommunity(communityId, actionType)
      .then(res => {
        setBikes(res);
      })
      .catch(err => {
        console.error(err);
        toast.error('Serviço Indisponível');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [actionType, communityId]);

  return (
    <>
      <Typography component="h5" variant="h5" className={classes.pageNameStyle}>
        {(actionType === 'devolution' && 'Devolver bicicleta') ||
          (actionType === 'withdraw' && 'Emprestar bicicleta')}
      </Typography>
      <div className={classes.cardPosition} data-testid="bikeList">
        <Typography component="h5" variant="h5" className={classes.titleStyle}>
          Selecione a bicicleta
        </Typography>
        <>
          {loading ? (
            <Loading />
          ) : (
            bikes?.map(item => {
              return (
                <Card
                  data-testid="select-bike-page"
                  className={classes.root}
                  key={item.name}
                  onClick={() => nextStepBike(item.id)}
                >
                  <CardMedia
                    className={classes.cover}
                    image={item.photoThumbnailPath}
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h3" variant="h3">
                        ORDEM: {item.orderNumber}
                      </Typography>
                      <Typography
                        component="h4"
                        variant="h4"
                        color="textSecondary"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        component="h5"
                        variant="h5"
                        color="textSecondary"
                      >
                        SÉRIE: {item.serialNumber}
                      </Typography>
                    </CardContent>
                    <div className={classes.controls} />
                  </div>
                </Card>
              );
            })
          )}
        </>
      </div>
    </>
  );
};

SelectBikeCard.defaultProps = {
  actionType: null,
};

export default SelectBikeCard;
