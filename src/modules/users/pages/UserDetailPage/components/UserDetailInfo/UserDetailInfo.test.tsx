import { render, screen } from '@testing-library/react';
import {
  MockedFirstUser,
  mockUserMissingInfo,
} from 'modules/users/mocks/MockedUser';
import UserService from 'modules/users/services/UserService';
import { BrowserRouter } from 'react-router-dom';
import UserDetailInfo from './UserDetailInfo';

jest.mock('modules/users/services/UserService');
const mockedUserService = UserService as jest.Mocked<typeof UserService>;

let container: HTMLElement;

const regularUser = MockedFirstUser;
const userMissingInfo = mockUserMissingInfo;

describe('User Detail Info', () => {
  it('Renders User Detail Info', () => {
    container = render(
      <BrowserRouter>
        <UserDetailInfo user={regularUser} />
      </BrowserRouter>,
    ).container;
    expect(container).toBeInTheDocument();
  });

  it('should have message on missing information', () => {
    container = render(
      <BrowserRouter>
        <UserDetailInfo user={userMissingInfo} />
      </BrowserRouter>,
    ).container;

    expect(screen.queryByText('Endereço não informado')).toBeInTheDocument();
    expect(screen.queryByText('Telefone não informado')).toBeInTheDocument();
  });
});
