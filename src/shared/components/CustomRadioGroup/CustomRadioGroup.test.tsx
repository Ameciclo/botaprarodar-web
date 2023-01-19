import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndAuth } from 'setupTests';
import CustomRadioGroup, { Props } from './CustomRadioGroup';

describe('Component: CustomRadioButton', () => {
  let defaultProps: Props;

  beforeEach(() => {
    defaultProps = {
      title: 'Título',
      value: '',
      name: 'radiogroup',
      options: [],
      onChange: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe('should render correctly', () => {
    it('with title and radio group', () => {
      renderWithRouterAndAuth(<CustomRadioGroup {...defaultProps} />);

      const title = screen.getByText(defaultProps.title);
      const radioGroup = screen.getByRole('radiogroup');

      expect(title).toBeInTheDocument();
      expect(radioGroup).toBeInTheDocument();
    });

    it('with no radio buttons when has no options', async () => {
      const { container } = renderWithRouterAndAuth(
        <CustomRadioGroup {...defaultProps} />,
      );

      const radio = container.querySelector(`input[type="radio"]`);
      expect(radio).not.toBeInTheDocument();
    });

    it('with radio buttons when has options', () => {
      defaultProps.options = [
        { label: 'Sim', value: 'Sim' },
        { label: 'Não', value: 'Não' },
        { label: 'Talvez', value: 'Talvez' },
      ];
      const { container } = renderWithRouterAndAuth(
        <CustomRadioGroup {...defaultProps} />,
      );

      defaultProps.options.forEach(option => {
        expect(screen.getByText(option.label)).toBeInTheDocument;
      });

      const radioButtons = container.querySelectorAll<HTMLInputElement>(
        `input[name="${defaultProps.name}"]`,
      );

      radioButtons.forEach(radioButton => {
        expect(radioButton.type).toBe('radio');
      });

      expect(radioButtons.length).toBe(defaultProps.options.length);
    });
  });

  describe('should assign right value', () => {
    let mockedOnChange;
    beforeEach(() => {
      defaultProps.options = [
        { label: 'Sim', value: 'Sim' },
        { label: 'Não', value: 'Não' },
      ];
      mockedOnChange = jest.fn();
    });

    it('when some option is clicked', () => {
      const { container } = renderWithRouterAndAuth(
        <CustomRadioGroup {...defaultProps} onChange={mockedOnChange} />,
      );

      const radioButtons =
        container.querySelectorAll<HTMLInputElement>(`input[type="radio"]`);

      const optionSelected = radioButtons[0];
      userEvent.click(optionSelected);

      expect(radioButtons[0].checked).toBeTruthy();
      expect(radioButtons[1].checked).toBeFalsy();
      expect(mockedOnChange).toHaveBeenCalledTimes(1);
    });

    it('when option clicked is changed', () => {
      const { container } = renderWithRouterAndAuth(
        <CustomRadioGroup {...defaultProps} onChange={mockedOnChange} />,
      );

      const radioButtons =
        container.querySelectorAll<HTMLInputElement>(`input[type="radio"]`);

      const optionSelectedFirst = radioButtons[0];
      userEvent.click(optionSelectedFirst);
      expect(radioButtons[0].checked).toBeTruthy();
      expect(radioButtons[1].checked).toBeFalsy();

      const optionSelectedFinal = radioButtons[1];
      userEvent.click(optionSelectedFinal);
      expect(radioButtons[0].checked).toBeFalsy();
      expect(radioButtons[1].checked).toBeTruthy();

      expect(mockedOnChange).toHaveBeenCalledTimes(2);
    });
  });
});
