import { lazy } from 'react';
import CommunityManagementPage from 'modules/communities/pages/CommunitiesPages/CommunityManagementPage/CommunityManagementPage';

const CreateCommunityPage = lazy(
  () =>
    import('modules/communities/pages/CreateCommunityPage/CreateCommunityPage'),
);
const EditCommunityPage = lazy(
  () => import('modules/communities/pages/EditCommunityPage/EditCommunityPage'),
);
const UserDetailPage = lazy(
  () => import('modules/users/pages/UserDetailPage/UserDetailPage'),
);
const CommunitySelectionPage = lazy(
  () =>
    import(
      '../modules/communities/pages/CommunitiesPages/CommunitiesSelectionPage/CommunitiesSelectionPage'
    ),
);
const DashboardPage = lazy(
  () => import('../modules/dashboard/pages/DashboardPage/DashboardPage'),
);
const UserPage = lazy(() => import('../modules/users/pages/UserPage/UserPage'));

const RegisterUserPage = lazy(
  () => import('../modules/users/pages/RegisterUser/RegisterUserPage'),
);
const LendBikePage = lazy(
  () => import('../modules/bicycles/pages/LendBike/LendBikePage'),
);
const LendBikeNextStep = lazy(
  () =>
    import(
      '../modules/bicycles/pages/LendBike/LendBikeNextStep/LendBikeNextStep'
    ),
);
const ReturnBikePage = lazy(
  () => import('../modules/bicycles/pages/ReturnBike/ReturnBikePage'),
);
const ReturnBikeStepOne = lazy(
  () =>
    import(
      '../modules/bicycles/pages/ReturnBike/ReturnBikeStepOne/ReturnBikeStepOne'
    ),
);

const BikeConfirmationPage = lazy(
  () =>
    import(
      '../modules/bicycles/pages/BikeConfirmationPage/BikeConfirmationPage'
    ),
);

const BikeFinalPage = lazy(
  () => import('../modules/bicycles/pages/BikeFinalPage/BikeFinalPage'),
);

const RegisterBikePage = lazy(
  () => import('../modules/bicycles/pages/RegisterBike/RegisterBikePage'),
);

export const routes = [
  {
    path: '/',
    comp: DashboardPage,
    private: true,
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
    path: '/comunidades/cadastrar-usuario',
    comp: RegisterUserPage,
    private: true,
  },
  {
    path: '/comunidades/cadastrar-bicicleta',
    comp: RegisterBikePage,
    private: true,
  },
  {
    path: '/comunidades/emprestar-bicicleta',
    comp: LendBikePage,
    private: true,
  },
  {
    path: '/comunidades/emprestar-bicicleta/selecionar-bicicleta',
    comp: LendBikeNextStep,
    private: true,
  },
  {
    path: '/comunidades/emprestar-bicicleta/confirmacao',
    comp: BikeConfirmationPage,
    private: true,
  },
  {
    path: '/comunidades/devolver-bicicleta',
    comp: ReturnBikePage,
    private: true,
  },
  {
    path: '/comunidades/devolver-bicicleta/questionario',
    comp: ReturnBikeStepOne,
    private: true,
  },
  {
    path: '/comunidades/devolver-bicicleta/confirmacao',
    comp: BikeConfirmationPage,
    private: true,
  },
  {
    path: '/comunidades/bicicleta/final',
    comp: BikeFinalPage,
    private: true,
  },
  {
    path: '/comunidades/editar/:id',
    comp: EditCommunityPage,
    private: true,
  },
  {
    path: '/comunidades/criar',
    comp: CreateCommunityPage,
    private: true,
  },
  {
    path: '/selecao-de-comunidades',
    comp: CommunitySelectionPage,
    private: true,
  },
  {
    path: '/comunidades/gerenciador-de-comunidade/:id',
    comp: CommunityManagementPage,
    private: true,
  },
];
