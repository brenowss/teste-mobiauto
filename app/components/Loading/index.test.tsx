import { render } from '@testing-library/react';
import Loading from './index';

describe('Loading component', () => {
  it('should render three LdsRingChild elements', () => {
    const { getAllByTestId } = render(<Loading />);
    const ldsRingChildren = getAllByTestId('lds-ring-child');
    expect(ldsRingChildren).toHaveLength(3);
  });
});
