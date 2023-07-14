import { fireEvent, render, screen, within } from '@testing-library/react';
import Select from './index';

const options = [{ label: 'Option 1', value: 'option1' }];

describe('Select', () => {
  it('should render the label and options', () => {
    render(
      <Select
        label="Select an option"
        options={options}
        value={options[0].value}
        onChange={() => {}}
      />
    );

    const label = screen.getByTestId('Select an option');
    expect(label).toBeInTheDocument();

    const option = screen.getByText('Option 1');
    expect(option).toBeInTheDocument();
  });
});
