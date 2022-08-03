import { FC } from 'react';
import { GearIcon } from 'shared/assets/icons';

export type IconTypes = 'gear';

interface Props {
  name: IconTypes;
}

const Icon: FC<Props> = ({ name }) => {
  const iconOptions = {
    gear: (
      <img src={GearIcon} alt="Configurações" data-testid={`icon-${name}`} />
    ),
  };

  return iconOptions[name];
};

export default Icon;
