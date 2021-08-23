import {
  GroupOutlined,
  DashboardOutlined,
  DirectionsBikeOutlined,
  ArrowBack,
  SupervisedUserCircleOutlined,
} from '@material-ui/icons';

export default (history: any, getAuth: any, handleLogout: any) => [
  {
    name: 'Login',
    path: '/login',
    icon: SupervisedUserCircleOutlined,
    action: () => history.push('/login'),
    hide: getAuth.value?.authenticated,
  },
  {
    name: 'Dados',
    path: '/',
    icon: DashboardOutlined,
    action: () => history.push('/'),
    hide: !getAuth.value?.authenticated,
  },
  {
    name: 'Comunidades',
    path: '/comunidades',
    icon: GroupOutlined,
    action: () => history.push('/comunidades'),
    hide: !getAuth.value?.authenticated,
  },
  {
    name: 'Usuários',
    path: '/usuarios',
    icon: DirectionsBikeOutlined,
    action: () => history.push('/usuarios'),
    hide: !getAuth.value?.authenticated,
  },
  {
    name: 'Perfil',
    path: '',
    icon: SupervisedUserCircleOutlined,
    disabled: true,
    hide: !getAuth.value?.authenticated,
  },
  {
    name: 'Sair',
    icon: ArrowBack,
    action: handleLogout,
    hide: !getAuth.value?.authenticated,
  },
];
