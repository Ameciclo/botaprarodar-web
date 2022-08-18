import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SchoolingEnum } from 'modules/users/models/types/SchoolingTypes';
import SocialInfoForm from './SocialInfoForm';

describe('SocialInfoForm', () => {
  it('should have default fields', async () => {
    const props = {
      onChange: jest.fn(),
      values: {
        schooling: '',
      },
    };

    render(<SocialInfoForm {...props} />);

    expect(screen.getByTestId('select-gender-test')).toBeInTheDocument();
    expect(screen.getByTestId('select-race-test')).toBeInTheDocument();
    expect(screen.getByTestId('select-schooling-test')).toBeInTheDocument();
    expect(screen.getByTestId('select-income-test')).toBeInTheDocument();
  });

  it('should show additional option when selecting schooling', async () => {
    const props = {
      onChange: jest.fn(),
      values: {
        schooling: '',
      },
    };

    const { rerender } = render(<SocialInfoForm {...props} />);

    const view = screen.getByTestId('select-schooling-test');
    const select = within(view).getByRole('button', {
      name: /não informado/i,
    });
    expect(screen.queryByText('Concluiu o grau acima?')).toBeFalsy();

    userEvent.click(select);
    await waitFor(() =>
      userEvent.click(
        screen.getByRole('option', { name: SchoolingEnum.EnsinoFundamental1 }),
      ),
    );

    expect(
      screen.getByRole('button', { name: SchoolingEnum.EnsinoFundamental1 }),
    ).toBeVisible();
    await rerender(
      <SocialInfoForm
        {...props}
        values={{ schooling: SchoolingEnum.EnsinoFundamental1 }}
      />,
    );
    expect(screen.getByText('Concluiu o grau acima?')).toBeVisible();
  });

  it('should not show additional option when selecting less than a year of schooling', async () => {
    const props = {
      onChange: jest.fn(),
      values: {
        schooling: '',
      },
    };

    const { rerender } = render(<SocialInfoForm {...props} />);

    const view = screen.getByTestId('select-schooling-test');
    const select = within(view).getByRole('button', {
      name: /não informado/i,
    });
    expect(screen.queryByText('Concluiu o grau acima?')).toBeFalsy();

    userEvent.click(select);
    await waitFor(() =>
      userEvent.click(
        screen.getByRole('option', { name: SchoolingEnum.SemOuMenosDeUmAno }),
      ),
    );

    expect(
      screen.getByRole('button', { name: SchoolingEnum.SemOuMenosDeUmAno }),
    ).toBeVisible();
    await rerender(
      <SocialInfoForm
        {...props}
        values={{ schooling: SchoolingEnum.SemOuMenosDeUmAno }}
      />,
    );
    expect(screen.queryByText('Concluiu o grau acima?')).toBeFalsy();
  });

  it('should not show additional option when selecting not to inform', async () => {
    const props = {
      onChange: jest.fn(),
      values: {
        schooling: '',
      },
    };

    const { rerender } = render(<SocialInfoForm {...props} />);

    const view = screen.getByTestId('select-schooling-test');
    const select = within(view).getByRole('button', {
      name: /não informado/i,
    });
    expect(screen.queryByText('Concluiu o grau acima?')).toBeFalsy();

    userEvent.click(select);
    await waitFor(() =>
      userEvent.click(
        screen.getByRole('option', { name: SchoolingEnum.NotInformed }),
      ),
    );

    const viewAfterClick = screen.getByTestId('select-schooling-test');
    const notInformedSelected = within(viewAfterClick).getByRole('button', {
      name: /não informado/i,
    });

    expect(notInformedSelected).toBeVisible();
    await rerender(
      <SocialInfoForm
        {...props}
        values={{ schooling: SchoolingEnum.NotInformed }}
      />,
    );
    expect(screen.queryByText('Concluiu o grau acima?')).toBeFalsy();
  });
});
