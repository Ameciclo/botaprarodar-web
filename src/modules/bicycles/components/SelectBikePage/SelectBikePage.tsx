import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Bike from 'modules/users/models/Bike';
import BikeService from 'modules/bicycles/services/BikeService';
import toast from 'shared/components/Toast/Toast';
import { EmptyState, Loading } from 'shared/components';
import { User } from 'modules/users/models';
import { FormValues } from 'modules/bicycles/pages/ReturnBike/ReturnBikeStepOne/ReturnBikeForm.schema';
import { EmptyStateImage } from 'shared/assets/images';
import BikeCard from '../BikeCard/BikeCard';
import useStyles from './SelectBikePage.styles';

export interface SelectBikeProps {
  communityId: string;
  actionType?: 'devolution' | 'withdraw' | null | undefined;
  selectedUser?: User;
  formValues?: FormValues;
}

const SelectBikeCard: React.FC<SelectBikeProps> = ({
  communityId,
  actionType,
  selectedUser,
  formValues,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const nextStepBike = (selectedBike: Bike) => {
    const params = { communityId, selectedBike, selectedUser, formValues };
    let path = '';

    if (actionType === 'devolution') {
      path = '/comunidades/devolver-bicicleta/questionario';
    }

    if (actionType === 'withdraw') {
      path = '/comunidades/emprestar-bicicleta/confirmacao';
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
      <div className={classes.cardPosition} data-testid="bikeList">
        {bikes.length ? (
          <Typography
            component="h5"
            variant="h5"
            className={classes.titleStyle}
          >
            Selecione a bicicleta
          </Typography>
        ) : (
          ''
        )}
        <>
          {loading ? (
            <Loading />
          ) : bikes.length ? (
            bikes?.map(item => {
              return (
                <BikeCard
                  key={item.name}
                  imagePath={item.photoThumbnailPath}
                  orderNumber={item.orderNumber}
                  serialNumber={item.serialNumber}
                  id={item.id}
                  name={item.name}
                  cardClick={() => nextStepBike(item)}
                />
              );
            })
          ) : (
            <EmptyState
              imgSrc={EmptyStateImage}
              heading="Nenhuma bicicleta disponível!"
              subheading="Verifique as bicicletas cadastradas e tente novamente."
            />
          )}
        </>
      </div>
    </>
  );
};

SelectBikeCard.defaultProps = {
  actionType: null,
  selectedUser: undefined,
  formValues: undefined,
};

export default SelectBikeCard;
