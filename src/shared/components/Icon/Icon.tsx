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
  description: string;
}

const iconOptions = {
  gear: GearIcon,
  lendBike: LendBikeIcon,
  giveBackBike: GiveBackBikeIcon,
  registerBike: RegisterBikeIcon,
  registerUser: RegisterUserIcon,
};

const Icon: FC<Props> = ({ name, description }) => {
  return (
    <img
      src={iconOptions[name]}
      alt={description}
      data-testid={`icon-${name}`}
    />
  );
};

export default Icon;
