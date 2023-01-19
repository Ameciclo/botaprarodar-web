import {
  GroupOutlined,
  DashboardOutlined,
  DirectionsBikeOutlined,
  SupervisedUserCircleOutlined,
} from '@material-ui/icons';
import { History } from 'history';
import AuthInterface from '../../../modules/authentication/models/AuthInterface';

export default (history: History, auth: AuthInterface) => [
  {
    name: 'Dados Gerais',
    path: '/',
    icon: DashboardOutlined,
    action: () => history.push('/'),
    hide: !auth?.authenticated,
  },
  {
    name: 'Comunidades',
    path: '/selecao-de-comunidades',
    icon: GroupOutlined,
    action: () => history.push('/selecao-de-comunidades'),
    hide: !auth?.authenticated,
  },
  {
    name: 'Usuárias',
    path: '/usuarios',
    icon: DirectionsBikeOutlined,
    action: () =>
      history.push('/usuarios', { communityId: auth.currentCommunity }),
    hide: !auth?.authenticated,
  },
  {
    name: 'Perfil',
    path: '',
    icon: SupervisedUserCircleOutlined,
    disabled: true,
    hide: !auth?.authenticated,
  },
];
