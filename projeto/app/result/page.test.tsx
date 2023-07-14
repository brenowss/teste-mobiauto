import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { useSelector } from '../../lib/redux';
import ResultPage from './page';

jest.mock('../../lib/redux');

describe('ResultPage', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
    (useSelector as jest.Mock).mockReturnValue({
      Modelo: 'Uno',
      AnoModelo: '2020',
      Valor: 'R$ 50.000,00',
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the page title', () => {
    render(<ResultPage />);
    const title = screen.getByText('Tabela Fipe: Preço Uno 2020');
    expect(title).toBeInTheDocument();
  });

  it('should render the vehicle price', () => {
    render(<ResultPage />);
    const price = screen.getByText('R$ 50.000,00');
    expect(price).toBeInTheDocument();
  });

  it('should render a message when there is no price available', () => {
    (useSelector as jest.Mock).mockReturnValue({
      Modelo: 'Uno',
      AnoModelo: '2020',
      Valor: null,
    });
    render(<ResultPage />);
    const message = screen.getByText('Não há preço disponível');
    expect(message).toBeInTheDocument();
  });

  it('should redirect to the home page when there is no value in the state', () => {
    (useSelector as jest.Mock).mockReturnValue(null);
    render(<ResultPage />);
    expect(useRouter().push).toHaveBeenCalledWith('/');
  });
});
