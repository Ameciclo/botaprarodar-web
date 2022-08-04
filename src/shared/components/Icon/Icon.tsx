import { FC } from 'react';
import {
  GearIcon,
  GiveBackBikeIcon,
  LendBikeIcon,
  RegisterBikeIcon,
  RegisterUserIcon,
} from 'shared/assets/icons';

export type IconTypes =
  | 'gear'
  | 'lendBike'
  | 'giveBackBike'
  | 'registerBike'
  | 'registerUser';

interface Props {
  name: IconTypes;
}

const Icon: FC<Props> = ({ name }) => {
  const iconOptions = {
    gear: (
      <img src={GearIcon} alt="Configurações" data-testid={`icon-${name}`} />
    ),
    lendBike: (
      <img
        src={LendBikeIcon}
        alt="Emprestar bicicleta"
        data-testid={`icon-${name}`}
      />
    ),
    giveBackBike: (
      <img
        src={GiveBackBikeIcon}
        alt="Devolver bicicleta"
        data-testid={`icon-${name}`}
      />
    ),
    registerBike: (
      <img
        src={RegisterBikeIcon}
        alt="Cadastrar bicicleta"
        data-testid={`icon-${name}`}
      />
    ),
    registerUser: (
      <img
        src={RegisterUserIcon}
        alt="Cadastrar usuária"
        data-testid={`icon-${name}`}
      />
    ),
  };

  return iconOptions[name];
};

export default Icon;
