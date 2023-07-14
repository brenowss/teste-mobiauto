import { render } from '@testing-library/react';
import Body from './index';

describe('Body component', () => {
  it('should render children', () => {
    const { getByText } = render(<Body>Test</Body>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
