import { lazy } from 'react';

const CreateAndEditCommunityPage = lazy(
  () =>
    import(
      'modules/communities/pages/CreateAndEditCommunity/CreateAndEditCommunity'
    ),
);
const UserDetailPage = lazy(
  () => import('modules/users/pages/UserDetailPage/UserDetailPage'),
);
const CommunityPage = lazy(
  () => import('../modules/communities/pages/CommunityPage/CommunityPage'),
);
const DashboardPage = lazy(
  () => import('../modules/dashboard/pages/DashboardPage/DashboardPage'),
);
const UserPage = lazy(() => import('../modules/users/pages/UserPage/UserPage'));

export const routes = [
  {
    path: '/',
    comp: DashboardPage,
    private: false,
  },
  {
    path: '/usuarios',
    comp: UserPage,
    private: true,
  },
  {
    path: '/usuarios/:id',
    comp: UserDetailPage,
    private: true,
  },
  {
    path: '/comunidades',
    comp: CommunityPage,
    private: true,
  },
  {
    path: '/comunidades/editar/:id',
    comp: CreateAndEditCommunityPage,
    private: true,
  },
  {
    path: '/comunidades/criar',
    comp: CreateAndEditCommunityPage,
    private: true,
  },
];
