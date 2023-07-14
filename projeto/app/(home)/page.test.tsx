import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/navigation';
import IndexPage from './page';
import DetailsService from '../services/DetailsService';
import '@testing-library/jest-dom/extend-expect';
import { reduxStore } from '../../lib/redux';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../services/DetailsService', () => ({
  getBrands: jest.fn(),
  getModels: jest.fn(),
  getYears: jest.fn(),
  getValue: jest.fn(),
}));

describe('IndexPage', () => {
  const mockRouter = { push: jest.fn() };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the form with the correct labels', async () => {
    await act(async () =>
      render(
        <Provider store={reduxStore}>
          <IndexPage />
        </Provider>
      )
    );

    expect(screen.getByTestId('Marca')).toBeInTheDocument();
    expect(screen.getByTestId('Modelos')).toBeInTheDocument();

    expect(screen.queryByLabelText('Anos')).not.toBeInTheDocument();
  });

  it('should fetch brands on mount', async () => {
    (DetailsService.getBrands as jest.Mock).mockResolvedValueOnce([
      { id: '1', name: 'Brand 1' },
    ]);

    await act(async () =>
      render(
        <Provider store={reduxStore}>
          <IndexPage />
        </Provider>
      )
    );

    await waitFor(() =>
      expect(DetailsService.getBrands).toHaveBeenCalledTimes(1)
    );
  });

  it('should fetch models when brand is selected', async () => {
    (DetailsService.getModels as jest.Mock).mockResolvedValueOnce([
      { id: '1', name: 'Model 1' },
    ]);

    await act(async () =>
      render(
        <Provider store={reduxStore}>
          <IndexPage />
        </Provider>
      )
    );

    fireEvent.change(screen.getByTestId('Marca'), {
      target: { value: '1' },
    });

    await waitFor(() =>
      expect(DetailsService.getModels).toHaveBeenCalledTimes(0)
    );
  });

  it('should disable the button when form is loading', async () => {
    (DetailsService.getValue as jest.Mock).mockResolvedValueOnce(10000);

    await act(async () =>
      render(
        <Provider store={reduxStore}>
          <IndexPage />
        </Provider>
      )
    );

    fireEvent.change(screen.getByTestId('Marca'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByTestId('Modelos'), {
      target: { value: '1' },
    });

    fireEvent.click(screen.getByText('Consultar preço'));

    expect(screen.getByText('Consultar preço')).toBeDisabled();

    await waitFor(() =>
      expect(DetailsService.getValue).toHaveBeenCalledTimes(0)
    );
  });
});
