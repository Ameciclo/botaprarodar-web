import userEvent from '@testing-library/user-event';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import CommunityService from 'modules/communities/services/CommunityService';
import { MockedFirstCommunity } from '../../../../mocks/MockedCommunity';
import EditCommunityForm from './CommunityForm';

jest.mock('modules/communities/services/CommunityService');
const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

async function fillAndSubmitComunityForm(
  orgName: string,
  communityName: string,
  orgEmail: string,
) {
  const orgNameField = screen.getByTestId('org_name');
  const communityNameField = screen.getByTestId('name-test');
  const orgEmailField = screen.getByTestId('org_email');

  fireEvent.change(orgNameField, {
    target: { value: orgName },
  });

  fireEvent.change(communityNameField, {
    target: { value: communityName },
  });

  fireEvent.change(orgEmailField, {
    target: { value: orgEmail },
  });

  await userEvent.click(screen.getByTestId('submit-button'));
}

describe('CommunityForm', () => {
  beforeEach(() => {
    render(<EditCommunityForm community={MockedFirstCommunity} />);
  });
  it('should render community form component', async () => {
    expect(screen.getByDisplayValue('joao@joao.com')).toBeInTheDocument();
  });

  it('should submit edit form', async () => {
    mockedCommunityService.editCommunityById.mockResolvedValue({
      data: {
        ...MockedFirstCommunity,
        org_name: 'orgNameTeste',
        name: 'communityNameTest',
        org_email: 'newEmail@example.com',
      },
    });

    await act(async () => {
      fillAndSubmitComunityForm(
        'orgNameTeste',
        'communityNameTest',
        'newEmail@example.com',
      );
    });

    await waitFor(() =>
      expect(CommunityService.editCommunityById).toHaveBeenCalledWith(
        '-MLDOXs3p35DEHg0gdUU',
        {
          ...MockedFirstCommunity,
          org_name: 'orgNameTeste',
          name: 'communityNameTest',
          org_email: 'newEmail@example.com',
        },
      ),
    );
  });
});
