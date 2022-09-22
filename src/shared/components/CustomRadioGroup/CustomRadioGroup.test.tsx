import { screen } from '@testing-library/react';
import { renderWithRouterAndAuth } from 'setupTests';
import CustomRadioGroup from './CustomRadioGroup';

describe('Component: CustomRadioButton', () => {
  let titleRadioGroup;

  // TODO
  describe('shoud render correctly', () => {
    beforeEach(() => {
      titleRadioGroup = 'Title';
    });

    it('when has total amount', async () => {
      renderWithRouterAndAuth(
        <CustomRadioGroup
          title={titleRadioGroup}
          value=""
          name=""
          options={[]}
          onChange={undefined}
        />,
      );

      const title = screen.getByText(titleRadioGroup);
      expect(title).toBeInTheDocument();
    });
  });
});
