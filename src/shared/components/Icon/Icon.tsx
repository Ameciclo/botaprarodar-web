import { FC } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

export type IconTypes = 'gear';

interface Props {
  name: IconTypes;
}

const Icon: FC<Props> = ({ name }) => {
  const iconOptions = {
    gear: <SettingsIcon data-testid={`icon-${name}`} />,
  };

  return iconOptions[name];
};

export default Icon;
