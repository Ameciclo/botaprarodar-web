import {
  GroupOutlined,
  DashboardOutlined,
  DirectionsBikeOutlined,
  ArrowBack,
  SupervisedUserCircleOutlined,
} from '@material-ui/icons';
import { History } from 'history';
import AuthInterface from '../../models/Auth/AuthInterface';

export default (
  history: History,
  auth: AuthInterface,
  handleLogout: () => void,
) => [
  {
    name: 'Login',
    path: '/login',
    icon: SupervisedUserCircleOutlined,
    action: () => history.push('/login'),
    hide: auth.authenticated,
  },
  {
    name: 'Dados',
    path: '/',
    icon: DashboardOutlined,
    action: () => history.push('/'),
    hide: !auth?.authenticated,
  },
  {
    name: 'Comunidades',
    path: '/comunidades',
    icon: GroupOutlined,
    action: () => history.push('/comunidades'),
    hide: !auth?.authenticated,
  },
  {
    name: 'Usuários',
    path: '/usuarios',
    icon: DirectionsBikeOutlined,
    action: () => history.push('/usuarios'),
    hide: !auth?.authenticated,
  },
  {
    name: 'Perfil',
    path: '',
    icon: SupervisedUserCircleOutlined,
    disabled: true,
    hide: !auth?.authenticated,
  },
  {
    name: 'Sair',
    icon: ArrowBack,
    action: handleLogout,
    hide: !auth?.authenticated,
  },
];
