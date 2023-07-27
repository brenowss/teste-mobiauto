import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header component', () => {
  it('should render the title', () => {
    render(<Header title="Test Title" />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    render(<Header title="Test Title" subtitle="Test Subtitle" />);
    const subtitleElement = screen.getByText(/Test Subtitle/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  it('should not render the subtitle if it is not provided', () => {
    render(<Header title="Test Title" />);
    const subtitleElement = screen.queryByText(/Test Subtitle/i);
    expect(subtitleElement).not.toBeInTheDocument();
  });
});
