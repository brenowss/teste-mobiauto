import { render } from '@testing-library/react';
import Root from './index';

describe('Root component', () => {
  it('should render children', () => {
    const { getByText } = render(<Root>Test</Root>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
